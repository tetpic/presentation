'use client'
import { useLiveQuery } from 'dexie-react-hooks';
import { db, UserSettings } from '../../../components/database/db';
import styles from './page.module.scss'
import { SubmitHandler, useController, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Select, Switch } from 'antd';

interface Props {
}

interface FormInputs extends Omit<UserSettings, 'id'> {
}

export default function Settings(props: Props) {
  const settings: UserSettings[] = useLiveQuery(() => db.userSettings.toArray());

  const methods = useForm<FormInputs>({
    defaultValues: {
      ...settings?.[0]
    }
  })

  useEffect(()=>{
    if(settings?.[0]) {
      methods.setValue('hardMode', settings?.[0].hardMode)
      methods.setValue('alwaysShuffleCards', settings?.[0].alwaysShuffleCards)
      methods.setValue('theme', settings?.[0].theme)
      methods.setValue('language', settings?.[0].language)
      methods.setValue('cardInitialSide', settings?.[0].cardInitialSide)
    }
  }, [settings])
  
  const hardModeController = useController({
    name: 'hardMode',
    control: methods.control
  })
  const alwaysShuffleCardsController = useController({
    name: 'alwaysShuffleCards',
    control: methods.control
  })
  const themeController = useController({
    name: 'theme',
    control: methods.control
  })
  const languageController = useController({
    name: 'language',
    control: methods.control
  })
  const cardInitialSideController = useController({
    name: 'cardInitialSide',
    control: methods.control
  })



  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    if(settings?.[0] && settings?.[0].id)  {
      await db.userSettings.update(settings?.[0].id, data)
    }
    else {
      await db.userSettings.add(data)
    }
    alert('Настройки успешно сохранены')
  }

  return (<div className={styles.root}> 
    <p className={styles.title}>
        Настройки
    </p>
    <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.formWrapper}>
      <div className={styles.form}>
      <label >
        <p>Повышенная сложность</p>
        <Switch 
        defaultValue={settings?.[0]?.hardMode === 'true' ? true : false}
        {...hardModeController.field}
        value={hardModeController.field.value === 'true' ? true : false}
        onChange={(value => {
          hardModeController.field.onChange({target: {value: value ? 'true' : 'false'}})
        })} 
        />
      </label>
      <label >
        <p>Всегда перемешивать карточки</p>
        <Switch 
        {...alwaysShuffleCardsController.field}
        value={alwaysShuffleCardsController.field.value === 'true' ? true : false}
        onChange={(value => {
          alwaysShuffleCardsController.field.onChange({target: {value: value ? 'true' : 'false'}})
        })} 
        />
      </label>
      <label >
        <p>Тема</p>
        <Select
        className={styles.input}
        {...themeController.field}
        onChange={(value => themeController.field.onChange({target: {value: value}}))}
        value={themeController.field.value}
        options={[
          { value: 'light', label: <span>Светлая</span> }, 
          { value: 'dark', label: <span>Темная</span> }]
        } 
        />
      </label>

      <label >
        <p>Язык приложения</p>
        <Select 
        {...languageController.field}
        onChange={(value => languageController.field.onChange({target: {value: value}}))}
        value={languageController.field.value}
        className={styles.input}
        options={[{ value: 'en', label: <span>English</span> }, { value: 'ru', label: <span>Русский</span> }]} 
        />
      </label>
      <label >
        <p>Сторона карточки</p>
        <Select 
        className={styles.input}
        {...cardInitialSideController.field}
        onChange={(value => cardInitialSideController.field.onChange({target: {value: value}}))}
        value={cardInitialSideController.field.value}
        options={[{ value: 'face', label: <span>Лицевая сторона</span> }, { value: 'back', label: <span>Обратная сторона</span> }]} 
        />
        </label>
      </div>
      <button type='submit' className={styles.submit}>Сохранить</button>

    </form>
  </div>)
}