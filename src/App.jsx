import './css/app.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
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
export function openModal(){
  document.getElementById('modal-bg').style.visibility = "visible"
  document.getElementById('modal-bg').style.opacity = "1"
  document.getElementById('modal').style.visibility = "visible"
  document.getElementById('modal').style.opacity = "1"
}

export default function App() {
  const [onlyOpen, setOnlyOpen] = useState(false)
  const [onlyClosed, setOnlyClosed] = useState(false)
  const [isInputFocused, setInputFocus] = useState(false);
  const [isWrited, setIsWrited] = useState(false)
  const navigate = useNavigate()

  const handleInputFocus = (inputName) => {
    setInputFocus((prevFocus) => ({ ...prevFocus, [inputName]: true }));
  };

  const handleInputWrited = (inputName) => {
    setIsWrited((prevFocus) => ({ ...prevFocus, [inputName]: true }));
  };

  const handleInputBlur = (inputName) => {
    setInputFocus((prevFocus) => ({ ...prevFocus, [inputName]: false }));
  };

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

  function closeModal() {
    document.getElementById('modal-bg').style.visibility = "hidden"
    document.getElementById('modal-bg').style.opacity = "0"
    document.getElementById('modal').style.visibility = "hidden"
    document.getElementById('modal').style.opacity = "0"
  }

  function datePicker(x) {
    if(x.key === "Delete"){
      return false
    }
    if(x.target.value.length === 2 && x.key !== "Backspace"){
      x.target.value = x.target.value + "/"
    }
    if(x.target.value.length === 5 && x.key !== "Backspace"){
      x.target.value = x.target.value + "/"
    }
  }

  return(
    <div className='padding'>
      <div className='modal-bg' id='modal-bg' onClick={() => closeModal()}/>
      <div className='modal' id='modal'>
        <div className='lines'>
          <label className={`floating-label ${isInputFocused['num-chamado'] ? 'focused' : ''}`} style={{left: '3.4em', top: `${isInputFocused['num-chamado'] || isWrited['num-chamado'] ? '0.5em' : '2.3em'}`}}>Num. Chamado</label>
          <input name='num-chamado' onChange={() => handleInputWrited('num-chamado')} className={'input-modal'} onFocus={() => handleInputFocus('num-chamado')} onBlur={() => handleInputBlur('num-chamado')} style={{width: '12em'}}/>
          <label className={`floating-label ${isInputFocused['ticket'] ? 'focused' : ''}`} style={{left: '17em', top: `${isInputFocused['ticket'] || isWrited['ticket'] ? '0.5em' : '2.3em'}`}}>Ticket Vinculado</label>
          <input name='ticket' onChange={() => handleInputWrited('ticket')} onFocus={() => handleInputFocus('ticket')} onBlur={() => handleInputBlur('ticket')} className={'input-modal'} style={{width: '12em'}}/>
          <label className={`floating-label ${isInputFocused['nome-fantasa'] ? 'focused' : ''}`} style={{left: '30.6em', top: `${isInputFocused['nome-fantasa'] || isWrited['nome-fantasa'] ? '0.5em' : '2.3em'}`}}>Nome fantasa do cliente</label>
          <input name='nome-fantasa' onChange={() => handleInputWrited('nome-fantasa')} onFocus={() => handleInputFocus('nome-fantasa')} onBlur={() => handleInputBlur('nome-fantasa')} className={'input-modal'} style={{width: '20em'}}/>
        </div>
        <div className='lines'>
          <label className={`floating-label ${isInputFocused['assunto'] ? 'focused' : ''}`} style={{top: `${isInputFocused['assunto'] || isWrited['assunto'] ? '5.5em' : '7em'}`, left: '3.4em'}}>Assunto</label>
          <input name='assunto' onChange={() => handleInputWrited('assunto')} onFocus={() => handleInputFocus('assunto')} onBlur={() => handleInputBlur('assunto')} className={'input-modal'} style={{width: '30em', marginTop: '1.2em'}}/>
          <label className='floating-label' style={{top: '5.5em', left: '39.5em'}}>Rede</label>
          <Dropdown isChangeable isModal options={AutorDropdownData.AutorDropdownData}/>
        </div>
        <div className='lines'>
          <label className={`floating-label ${isInputFocused['data-inicial'] ? 'focused' : ''}`} style={{top: `${isInputFocused['data-inicial'] || isWrited['data-inicial'] ? '10em' : '12em'}`, left: '3.4em'}}>Data inicial</label>
          <input name='data-inicial' onChange={() => handleInputWrited('data-inicial')} onFocus={() => handleInputFocus('data-inicial')} onBlur={() => handleInputBlur('data-inicial')} onKeyUp={(x) => datePicker(x)} maxLength={10} className={'input-modal'} style={{marginTop: '1.2em', width: '7em'}}/>
          <label className={`floating-label ${isInputFocused['data-final'] ? 'focused' : ''}`} style={{top: `${isInputFocused['data-final'] || isWrited['data-final'] ? '10em' : '12em'}`, left: '11.6em'}}>Data final</label>
          <input name='data-final' onChange={() => handleInputWrited('data-final')} onFocus={() => handleInputFocus('data-final')} onBlur={() => handleInputBlur('data-final')} onKeyUp={(x) => datePicker(x)} maxLength={10} className={'input-modal'} style={{marginTop: '1.2em', width: '7em'}}/>
          <label className={`floating-label ${isInputFocused['data-previsao-saida'] ? 'focused' : ''}`} style={{top: `${isInputFocused['data-previsao-saida'] || isWrited['data-previsao-saida'] ? '10em' : '12em'}`, left: '19.5em'}}>Data previsão saída</label>
          <input name='data-previsao-saida' onChange={() => handleInputWrited('data-previsao-saida')} onFocus={() => handleInputFocus('data-previsao-saida')} onBlur={() => handleInputBlur('data-previsao-saida')} onKeyUp={(x) => datePicker(x)} maxLength={10} className={'input-modal'} style={{width: '15em', marginTop: '1.2em'}}/>
          <label className={`floating-label ${isInputFocused['data-previsao-entrada'] ? 'focused' : ''}`} style={{top: `${isInputFocused['data-previsao-entrada'] || isWrited['data-previsao-entrada'] ? '10em' : '12em'}`, left: '35.7em'}}>Data previsão entrada</label>
          <input name='data-previsao-entrada' onChange={() => handleInputWrited('data-previsao-entrada')} onFocus={() => handleInputFocus('data-previsao-entrada')} onBlur={() => handleInputBlur('data-previsao-entrada')} onKeyUp={(x) => datePicker(x)} maxLength={10} className={'input-modal'} style={{width: '15em', marginTop: '1.2em'}}/>
        </div>
        <div className='lines'>
          <label className={`floating-label ${isInputFocused['data-sla-inicial'] ? 'focused' : ''}`} style={{top: `${isInputFocused['data-sla-inicial'] || isWrited['data-sla-inicial'] ? '15em' : '16.8em'}`, left: '3.4em'}}>Data SLA inicial</label>
          <input name='data-sla-inicial' onChange={() => handleInputWrited('data-sla-inicial')} onFocus={() => handleInputFocus('data-sla-inicial')} onBlur={() => handleInputBlur('data-sla-inicial')} onKeyUp={(x) => datePicker(x)} maxLength={10} className={'input-modal'} style={{width: '10em', marginTop: '1.2em'}}/>
          <label className={`floating-label ${isInputFocused['data-sla-final'] ? 'focused' : ''}`} style={{top: `${isInputFocused['data-sla-final'] || isWrited['data-sla-final'] ? '15em' : '16.8em'}`, left: '15.1em'}}>Data SLA final</label>
          <input name='data-sla-final' onChange={() => handleInputWrited('data-sla-final')} onFocus={() => handleInputFocus('data-sla-final')} onBlur={() => handleInputBlur('data-sla-final')} onKeyUp={(x) => datePicker(x)} maxLength={10} className={'input-modal'} style={{width: '10em', marginTop: '1.2em'}}/>
          <label className='floating-label' style={{top: '15.5em', left: '26.6em'}}>Relatório</label>
          <Dropdown isChangeable isModal options={AutorDropdownData.AutorDropdownData}/>
          <label className='floating-label' style={{top: '15.5em', left: '39.5em'}}>Categoria</label>
          <Dropdown isChangeable isModal options={AutorDropdownData.AutorDropdownData}/>
        </div>
        <div className='lines'>
          <label className='floating-label' style={{top: '20.3em', left: '3.4em'}}>Prioridade</label>
          <Dropdown isChangeable isModal options={AutorDropdownData.AutorDropdownData}/>
          <label className='floating-label' style={{top: '20.3em', left: '15.4em'}}>Desenvolvimento</label>
          <Dropdown isChangeable isModal options={AutorDropdownData.AutorDropdownData}/>
          <label className='floating-label' style={{top: '20.3em', left: '27.4em'}}>Em análise</label>
          <Dropdown isChangeable isModal options={AutorDropdownData.AutorDropdownData}/>
          <label className='floating-label' style={{top: '20.3em', left: '39.5em'}}>Situação</label>
          <Dropdown isChangeable isModal options={AutorDropdownData.AutorDropdownData}/>
        </div>
        <div className='lines'>
          <label className='floating-label' style={{top: '25em', left: '3.4em'}}>Ocorrido inesperado</label>
          <Dropdown isChangeable isModal options={AutorDropdownData.AutorDropdownData}/>
          <label className='floating-label' style={{top: '25em', left: '15.4em'}}>Responsável</label>
          <Dropdown isChangeable isModal options={AutorDropdownData.AutorDropdownData}/>
          <label className='floating-label' style={{top: '25em', left: '27.4em'}}>Primeiro Análisador</label>
          <Dropdown isChangeable isModal options={AutorDropdownData.AutorDropdownData}/>
          <label className='floating-label' style={{top: '25em', left: '39.5em'}}>Representante</label>
          <Dropdown isChangeable isModal options={AutorDropdownData.AutorDropdownData}/>
        </div>
        <div className='lines'>
          <label className='floating-label' style={{top: '30em', left: '3.4em'}}>Número chamado</label>
          <Dropdown isChangeable isModal options={AutorDropdownData.AutorDropdownData}/>
          <label className='floating-label' style={{top: '30em', left: '15.4em'}}>Ordem</label>
          <Dropdown isChangeable isModal options={AutorDropdownData.AutorDropdownData}/>
          <label className={`floating-label ${isInputFocused['tempo-inatividade'] ? 'focused' : ''}`} style={{top: `${isInputFocused['tempo-inatividade'] || isWrited['tempo-inatividade'] ? '29.8em' : '31.5em'}`, left: '27.7em'}}>Tempo de inatividade (dias)</label>
          <input onChange={() => handleInputWrited('tempo-inatividade')} onFocus={() => handleInputFocus('tempo-inatividade')} onBlur={() => handleInputBlur('tempo-inatividade')} name='tempo-inatividade' className={'input-modal'}  style={{marginTop: '1.2em', width: '15em'}}/>
          <label className={`floating-label ${isInputFocused['versao'] ? 'focused' : ''}`} style={{top: `${isInputFocused['versao'] || isWrited['versao'] ? '29.8em' : '31.5em'}`, left: '43.6em'}}>Versão</label>
          <input onChange={() => handleInputWrited('versao')} onFocus={() => handleInputFocus('versao')} onBlur={() => handleInputBlur('versao')} name='versao' className={'input-modal'} style={{marginTop: '1.2em'}}/>
        </div>
        <div style={{ marginLeft: '41.25%'}}><button className='button-modal'>PESQUISAR</button></div>
      </div>
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
                  <th style={{display: "flex", flexDirection: "row", width: '100%'}}>
                    <BiSad className='open' title='Aberto'/> 
                    <div style={{width: '100%'}}>
                      <div style={{display: 'flex', flexDirection: 'row'}}>
                        <p className='tr-text' style={{width: "80%", cursor: 'pointer'}} onClick={() => navigate('/detalhes')}>{x.assunto} </p>
                        <p className='tr-text' style={{width: '20%'}}>{x.sla != "null" ? "SLA: " + x.sla : 'SLA: Inexistente'}</p>
                      </div>
                      <div className='tr-subtext' style={{marginBottom: '1em'}}>{x.titulo} </div>
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
  )
}