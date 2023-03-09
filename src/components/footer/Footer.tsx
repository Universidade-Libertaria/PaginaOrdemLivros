import Link from "next/link";
import {
  TwitterLogo,
  InstagramLogo,
  YoutubeLogo,
  FacebookLogo,
  DiscordLogo,
  UsersThree,
} from "phosphor-react";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <div className={styles.wrapper}>
      <h3>Nossas Redes</h3>
      <div className={styles.buttonsContainer}>
        <Link href='https://twitter.com/UniversidadeLi3' target='_blank'>
          <TwitterLogo size={35} />
        </Link>
        <Link
          href='https://www.instagram.com/libertariauniversidade/'
          target='_blank'
        >
          <InstagramLogo size={35} />
        </Link>
        <Link
          href='https://www.youtube.com/c/UniversidadeLibert%C3%A1ria'
          target='_blank'
        >
          <YoutubeLogo size={35} />
        </Link>
        <Link
          href='https://www.facebook.com/universidadelibertariaoficial/'
          target='_blank'
        >
          <FacebookLogo size={35} />
        </Link>
        <Link href='https://discord.gg/universolibertario' target='_blank'>
          <DiscordLogo size={35} />
        </Link>
        <Link href='https://dao.universidadelibertaria.com.br/' target='_blank'>
          <UsersThree size={35} />
        </Link>
      </div>
    </div>
  );
}
