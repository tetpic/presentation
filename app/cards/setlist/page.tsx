'use client'
import { SubmitHandler, useForm } from "react-hook-form"
import { db, Sets } from "../../../components/database/db"
import { useLiveQuery } from "dexie-react-hooks"
import Link from "next/link"

interface Props {
}

type FormInputs = Omit<Sets, 'id' | 'name'>



export default function SetList(props: Props) {
  const methods = useForm<FormInputs>()
  const sets = useLiveQuery(() => db.sets.toArray());


  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const name = encodeURI(data.label.toLowerCase())

    console.log(name)
    const id = await db.sets.add(
     {
      ...data,
      name
     }
    ).catch(err=> {
      console.log(err)
    })
    methods.reset()
    alert(`набор "${data.label}" успешно создан`)
  }


  return (<div> 
    <p>Список наборов</p>
    {
      sets?.length === 0 &&
      <div>пока тут нет ни одного набора... но всегда можно создать первый!</div>
    }
    <form onSubmit={methods.handleSubmit(onSubmit)} >
      <label >
        <p>Название набора</p>
        <input type="text" {...methods.register('label')} />
      </label>
      <label >
        <p>Язык лицевой стороны</p>
        <input type="text" {...methods.register('faceLang')} />
      </label>
      <label >
        <p>Язык обратной стороны</p>
        <input type="text" {...methods.register('backLang')} />
      </label>
      <button type="submit">создать</button>
    </form>
    {sets && sets?.map(set => <Link  key={set.id} href={'/cards/setlist/' + set.name + '/review'}>{set.label}</Link>)}
  </div>)
}