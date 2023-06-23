"use client"
import { styled } from "styled-components";
import UserPic from "../components/userCard/userPic";
import { font } from "../styled/variables";
import s from "./page.module.scss"


const H1 = styled.h1`
    font-family: ${font.caveat.name};
    font-weight: ${font.caveat[400]}
`


export default function Page() {
    return (<>
        <H1>Hello, Next.js!</H1>
        <UserPic/>
    </>
    )
  }