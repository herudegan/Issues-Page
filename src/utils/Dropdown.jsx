
import React from "react";
import "../css/app.css";
import { IoMdArrowDropdown } from 'react-icons/io'
import { useState, useEffect, useRef } from "react";

const Dropdown = ({ placeHolder, options, isSearchable, isRight, isDeletable, isModal, isChangeable }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)
  const searchRef = useRef()
  const inputRef = useRef()
  const [searchValue, setSearchValue] = useState("")
  var place = null
  const logo = "./"

  useEffect(() => {
    const handler = (x) => {
      if(inputRef.current && !inputRef.current.contains(x.target)) {
        setShowMenu(false)
      }
    }

    window.addEventListener("click", handler)
    return () => {
        window.removeEventListener("click", handler)
    }
  })

  useEffect(() => {
    setSearchValue("")
    if(showMenu && searchRef.current) {
        searchRef.current.focus()
    }
  }, [showMenu])

  const handleInputClick = (x) => {
    setShowMenu(!showMenu)
  }

  const getDisplay = () => {
    if (selectedValue && isChangeable) {
      return selectedValue.label;
    }
    return placeHolder
  };

  const onItemClick = (x) => {
    setSelectedValue(x)
  }

  const isSelected = (x) => {
    if(!selectedValue){
        return false
    }
    return selectedValue.value === x.value
  }

  const onSearch = (x) => {
    setSearchValue(x.target.value)
  }

  const getOptions = () => {
    if(!searchValue) {
        return options
    }
    return options.filter((x) => x.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)
  }

  return (
    <div className={`${isModal ? "modal-dropdown-container" : "dropdown-container"}  ${isDeletable ? "deletable" : ''}`}>
      <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
        <div className={`${isModal ? "modal-dropdown-name" : "dropdown-name"}`}>{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <IoMdArrowDropdown style={{marginTop: '0.5em'}} />
          </div>
        </div>
        { showMenu && (
          <div className={`dropdown-menu ${isRight ? "right" : ''}`}>
              <div className="sort-text">Ordenar Por {placeHolder !== "Ordenar" ? placeHolder : ""}</div>
              {isSearchable && (
                  <div className="search-box">
                      <input onChange={onSearch} value={searchValue} ref={searchRef}/>
                  </div>
              )}
              {getOptions().map((x) => {
                  const imageUrl = new URL(`./images/${x.img}`, import.meta.url).href
                  return(
                      <div onClick={() => onItemClick(x)} key={x.value} className={`dropdown-item ${isSelected(x) && "selected"}`}>
                          {x.img !== undefined ? <img src={imageUrl} className="image"/> : ''}<div className="label">{x.label}</div>
                      </div>
                  )
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;