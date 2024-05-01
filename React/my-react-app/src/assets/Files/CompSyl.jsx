import React from 'react'
import ReactDOM from 'react-dom'
import { RadioButtonWithLabel } from '../Props';

function Syl()
{
    return (
        <div>
            <div style={{paddingLeft:'100px'}}>
                <h2>AOA</h2>
            <RadioButtonWithLabel subject="Module 1"  downlink='https://drive.google.com/file/d/1JQTdaIxxwnrLQI1_OoKAkSX19oE0Az73/view?usp=classroom_web&authuser=0'/>
            <RadioButtonWithLabel subject="Module 2" downlink='https://drive.google.com/file/d/1-9Gukno35GH_vbmxcgScUFHGqdaNFSIu/view?usp=classroom_web&authuser=0'/>
            <RadioButtonWithLabel subject="Module 3" downlink='https://drive.google.com/file/d/1E3NpPfoaC8fWGsOkv6qmYZNxXAkByYoc/view?usp=classroom_web&authuser=0'/>
            </div>
            <div style={{paddingLeft:'100px'}}>
                <h2>MP</h2>
            <RadioButtonWithLabel subject="Module 1 " downlink='https://drive.google.com/file/d/1e-pg5mpoSgdkP1VX0H_Y78YEEvKWWpDz/view?usp=classroom_web&authuser=0'/>
            <RadioButtonWithLabel subject="Module 2" downlink='https://drive.google.com/file/d/1hp4Txlwx4ZN0i0dawUE-ogb5J6CAHdvE/view?usp=classroom_web&authuser=0'/>
            <RadioButtonWithLabel subject="Module 3" downlink='https://drive.google.com/file/d/1ywu_ZgXZYS-W3POYkK_iHwg54kFQjBf7/view?usp=classroom_web&authuser=0'/>
            </div>
        </div>
    )
}

export default Syl;