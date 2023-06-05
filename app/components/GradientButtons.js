import React from 'react'
import './GradientButtons.css'
import Link from 'next/link'

export function GradientButtonYR(props) {
  return (
    <div className="buttonContainer">
      <Link href={props.link}>
        <div className="gradientButton">{props.children}</div>
        <div className="gradientButtonBackdrop grad-red-to-yellow"/>
      </Link>
    </div>
  )
}

export function GradientButtonBG(props) {
  return (
    <div className="buttonContainer">
      <Link href={props.link}>
        <div className="gradientButton">{props.children}</div>
        <div className="gradientButtonBackdrop grad-blue-to-aqua"/>
      </Link>
    </div>
  )
}

export function GradientButtonBLB(props) {
  return (
    <div className="buttonContainer">
      <Link href={props.link}>
        <div className="gradientButton">{props.children}</div>
        <div className="gradientButtonBackdrop grad-blue-to-light-blue"/>
      </Link>
    </div>
  )
}

export function GradientButtonGY(props) {
  return (
    <div className="buttonContainer">
      <Link href={props.link}>
        <div className="gradientButton">{props.children}</div>
        <div className="gradientButtonBackdrop grad-green-to-yellow"/>
      </Link>
    </div>
  )
}

export function GradientButtonPO(props) {
  return (
    <div className="buttonContainer">
      <Link href={props.link}>
        <div className="gradientButton">{props.children}</div>
        <div className="gradientButtonBackdrop grad-purple-to-orange"/>
      </Link>
    </div>
  )
}