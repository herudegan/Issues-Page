import './css/app.css'
import React, { useState } from 'react';
import { BiSad, BiHappyAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai"
import Filter_input from './utils/filters';
import Dropdown from './utils/Dropdown';
import AutorDropdownData from './json/AutorDropdownData.json'
import RotuloDropdownData from './json/RotuloDropdownData.json'
import ProjetosDropdownData from './json/ProjetosDropdownData.json'
import MarcosDropdownData from './json/MarcosDropdownData.json'
import CessionarioDropdownData from './json/CessionarioDropdownData.json'
import OrdenarDropdownData from './json/OrdenarDropdownData.json'
import IssuesAbertasData from './json/IssuesAbertasData.json'
import IssuesFechadasData from './json/IssuesFechadasData.json'

export function openModal() {
  document.getElementById('background-modal').style.display = 'block'
  document.getElementById('modal').style.display = 'block'
}

export default function App() {
  const [onlyOpen, setOnlyOpen] = useState(false)
  const [onlyClosed, setOnlyClosed] = useState(false)

  function closeModal() {
    document.getElementById('background-modal').style.display = 'none'
    document.getElementById('modal').style.display = 'none'
  }

  function Clean() {
    if(onlyOpen || onlyClosed){
      return(
        <>
          <div className='clean' onClick={() => {setOnlyOpen(false), setOnlyClosed(false)}}>
            <AiOutlineClose className='clean-icon'/>
            <div style={{fontSize: '0.8em'}}>Limpar filtros</div>
          </div><br/>
        </>
      )
    }
  }

  return(
    <>
      <div id='background-modal' className='background-modal' onClick={closeModal}/>
      <div id='modal' className='modal'>
        <div className='row linha-1'>
          <input className='input-pequeno-modal' placeholder='Num.Chamado'/>
          <input className='input-pequeno-modal' placeholder='Ticket Vinculado'/>
          <input className='input-medio-modal' placeholder='Nome fantasa do cliente'/>
        </div>
      </div>
      <div className='padding'>
        <h1>Issues Table</h1>
        <div className="container">
          <Filter_input/>
          <div className='row' style={{marginBottom: '0.5em', marginTop: '0.5em'}}>
            <div className='open-header' onClick={() => {setOnlyOpen(true), setOnlyClosed(false)}}>
              <BiSad className='open-icon' title='Abertos'/> 
              <p style={{fontSize: '0.8em', width: '6em'}}>1 Aberto(s)</p> 
            </div>
            <div className='closed-header' onClick={() => {setOnlyOpen(false), setOnlyClosed(true)}}>
              <BiHappyAlt className='closed-icon' title='Fechados'/> 
              <p style={{fontSize: '0.8em', width: '7em'}}>1 Fechado(s)</p>
            </div>
          </div>
          <Clean/>
          <table className='table'>
            <thead>
              <tr className='header' style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0, minHeight: "3em", width: '100%'}}>
                <th style={{display: "flex", flexDirection: 'row', margin: 'auto', alignItems: 'center'}}>
                  <Dropdown isSearchable isRight placeHolder="Autor" options={AutorDropdownData.AutorDropdownData}/>
                  <Dropdown isSearchable isRight placeHolder="Rótulo" options={RotuloDropdownData.RotuloDropdownData}/>
                  <Dropdown isSearchable isDeletable placeHolder="Projetos" options={ProjetosDropdownData.ProjetosDropdownData}/>
                  <Dropdown isSearchable isDeletable placeHolder="Marcos" options={MarcosDropdownData.MarcosDropdownData}/>
                  <Dropdown isSearchable isDeletable placeHolder="Cessionário" options={CessionarioDropdownData.CessionarioDropdownData}/>
                  <Dropdown placeHolder="Ordenar" options={OrdenarDropdownData.OrdenarDropdownData}/>
                </th>
              </tr>
            </thead>
            <tbody>
              {onlyClosed !== true ? IssuesAbertasData.IssuesAbertasData.map((x) => {
                return(
                  <tr key={x.numero} style={{borderTopRightRadius: 0, borderTopLeftRadius: 0}}>
                    <th style={{display: "flex", flexDirection: "row"}}>
                      <BiSad className='open' title='Aberto'/> 
                      <div>
                        <p className='tr-text'>{x.titulo} </p>
                        <div className='row'>
                          {x.tags.map((x) => {
                            return(
                              <div key={x.name} className='tags' style={{backgroundColor: `${x.color}`, color: `${x.text_color}`}}>
                                {x.name}
                              </div>
                          )})}
                        </div>
                        <div className='row' style={{textAlign: 'justify'}}>
                          <p className='tr-text-author'>
                            {x.numero} foi {x.data} por: 
                          </p>
                          <p className='tr-text-user'>
                              {x.usuario}
                          </p>
                        </div>
                      </div>
                    </th> 
                  </tr>
                )
              }) : ''}
              {onlyOpen !== true ? IssuesFechadasData.IssuesFechadasData.map((x) => {
                return(
                  <tr key={x.numero}>
                    <th style={{display: "flex", flexDirection: "row"}}>
                      <BiHappyAlt className='closed' title='Fechado'/> 
                      <div>
                        <p className='tr-text'>{x.titulo}</p>
                        <div style={{display: '-webkit-inline-flex'}}>
                          {x.tags.map((x) => {
                            return(
                              <div key={x.name} className='tags' style={{backgroundColor: `${x.color}`, color: `${x.text_color}`}}>
                                {x.name}
                              </div>
                          )})}
                        </div>
                        <div className='row'>
                          <p className='tr-text-author'>
                            {x.numero} foi {x.data} por: 
                          </p>
                          <p className='tr-text-user'>
                            {x.usuario}
                          </p>
                        </div>
                      </div>
                    </th>
                  </tr>
                )
              }) : ''}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}