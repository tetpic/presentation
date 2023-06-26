import Image from "next/image"
import s from "./about.module.scss"
import myself from "../../images/myself.jpg"
import myselfMobile from "../../images/myselfMobile.png"

export default function About () {
  
    return <>
        <section className={s.about}>
            <div className="content">
                <h1 className={s.about__title}>О себе</h1>
                <div className={s.about__content}>
                    <picture className={s.about__image}>
                        <source srcSet={myselfMobile.src} media="(max-width: 1024px)"/>
                        <Image  alt={"userpic"} src={myself} />
                    </picture>
                    <div className={s.about__description}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis voluptates veritatis officia, rerum corporis dolor vel doloremque eius rem suscipit, eum error, reprehenderit nulla laborum voluptate esse voluptatem fugiat atque?
                        Quae dolore aperiam neque debitis, sapiente officia! Facere tenetur laboriosam porro nam nemo officia reiciendis inventore doloribus, aliquam error labore. Accusantium sapiente molestiae eveniet expedita, ipsam amet reiciendis? Aliquid, dolor!
                        Illum reprehenderit libero rerum facere quia explicabo modi error dolore laborum aliquam ducimus non, asperiores quis molestiae doloremque enim eveniet, iusto ratione est, aliquid eum consequatur? Voluptates atque ea officia.
                        Qui in quam quaerat, architecto commodi, totam unde quis sequi eligendi necessitatibus optio culpa provident adipisci aperiam possimus omnis quod dolor, neque reprehenderit. Commodi, minima sapiente aut minus a dicta!
                        Nesciunt iste eaque nisi modi quod ea ab consequuntur at, consectetur laborum velit, laudantium accusamus! Beatae sequi repudiandae, at quod minus unde, nostrum iste consequuntur in, voluptates et odit pariatur.
                        Natus, distinctio sequi impedit itaque optio hic explicabo aut nesciunt earum. Dolorem consectetur quos, explicabo aliquid illo iure quidem dolore fuga temporibus excepturi esse alias magni eos, voluptas, nesciunt architecto.
                        Molestiae accusantium est explicabo dicta obcaecati autem laboriosam beatae cupiditate harum nulla alias numquam soluta a quia facilis odit iste cum, praesentium natus expedita, enim iusto! Fugit eveniet recusandae eligendi?
                        Laborum, provident! Id earum suscipit neque magni itaque modi repellat, voluptatibus blanditiis nam reprehenderit fugiat soluta nulla voluptate sunt dolorum. Omnis rerum nesciunt dolores saepe doloribus sapiente debitis deserunt beatae?
                        Itaque harum minima amet ullam ab consectetur magnam aspernatur laboriosam voluptatem a eligendi ea id, atque saepe error magni esse doloremque recusandae numquam! Minus similique ex, ut cupiditate non eius?
                        Unde ipsa quia dolores. Voluptatum quae magnam id praesentium consectetur. Quos impedit magnam et aut reiciendis vero ipsa aperiam. Quod tenetur quibusdam voluptates molestiae blanditiis accusantium voluptatum, in ullam quos.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}