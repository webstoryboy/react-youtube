import { CiAirportSign1 } from 'react-icons/ci'
import { CiTrophy } from 'react-icons/ci'
import { CiStar } from 'react-icons/ci'
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const menuText = [
    {
        title: "여행 유튜버 홈",
        icon: <CiAirportSign1 />,
        src: "/"
    },{
        title: "오늘의 여행지 탐험",
        icon: <CiTrophy />,
        src: "/today"
    },{
        title: "유명 유튜버",
        icon: <CiStar />,
        src: "/youtuber"
    }
]

export const keywordText = [
    {
        title: "빠니보틀",
        src: "/serach/빠니보틀"
    },{
        title: "곽튜브",
        src: "/serach/곽튜브"
    },{
        title: "Joe튜브",
        src: "/serach/Joe튜브"
    },{
        title: "국제커플",
        src: "/serach/국제커플"
    },{
        title: "캐럿맨 여행기",
        src: "/serach/캐럿맨 여행기"
    },{
        title: "희철리즘",
        src: "/serach/희철리즘"
    },{
        title: "여행가 제이",
        src: "/serach/여행가 제이"
    },{
        title: "테디여행기",
        src: "/serach/테디여행기"
    },{
        title: "채코제",
        src: "/serach/채코제"
    },{
        title: "노마드션",
        src: "/serach/노마드션"
    },{
        title: "둥지언니",
        src: "/serach/둥지언니"
    },{
        title: "모칠레로",
        src: "/serach/모칠레로"
    },{
        title: "제이치핏",
        src: "/serach/제이치핏"
    },{
        title: "브루스리 TV",
        src: "/serach/브루스리 TV"
    }
]

export const snsText = [
    {
        title: "github",
        src: "https://github.com/webstoryboy",
        icon: <AiFillGithub />
    },{
        title: "Codepen",
        src: "https://codepen.io/webstoryboy",
        icon: <AiOutlineCodepen />
    },{
        title: "Youtube",
        src: "https://www.youtube.com/webstoryboy",
        icon: <AiFillYoutube />
    },{
        title: "Instagram",
        src: "https://www.instagram.com/webstoryboy",
        icon: <AiOutlineInstagram />
    }
]