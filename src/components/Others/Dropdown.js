import React, { useState } from 'react'
import "./dropdown.css"
import dropArrow from "../../assets/art/drop_arrow.svg"

const Dropdown = ({list, title, type}) => {
    const [isListOpen, setIsListOpen] = useState(false)

   const toggleList = () => {
        isListOpen === false ? setIsListOpen(true) : setIsListOpen(false)
     }

     const [dropList, setDropList] = useState([])

    let tempList =[]

    const dropdownObject = {
      id: 0,
      name: "",
      icon: ""
    }
   if(list != null)  {for(let i = 0; i < list.length; i++) {
      // console.log(stylesList[i]);
      if(type === "styles") {
      dropdownObject.id = list[i].styleId
      dropdownObject.name = list[i].name
    }
    if(type === "subjects") {
      dropdownObject.id = list[i].subjectId
      dropdownObject.name = list[i].subjectName
    }

    if(type === "mediums" ) {
      dropdownObject.id = list[i].artId
      dropdownObject.name = list[i].artMedium
    }
       tempList.push({...dropdownObject})
    }
}
    //  console.log(tempList);
  return (
    <div className={`${isListOpen ? "dd-wrapper" : "dd-wrapper1"}`}>
      {isListOpen ? (<button
        type="button"
        className="dd-header1"
        onClick={toggleList}
      >
        <div className="dd-header-title">{title}</div>
        <img src={dropArrow} alt="" />

      </button>) : (<button
        type="button"
        className="dd-header"
        onClick={toggleList}
      >
        <div className="dd-header-title">{title}</div>
        <img src={dropArrow} alt="" />

      </button>) }
      {isListOpen && (
        <div
          role="list"
          className="dd-list"
        >
          {tempList.map((item) => (
            <button
              type="button"
              className="dd-list-item"
              key={item.id}
            //   onClick={() => selectItem(item)}
            >
              {item.name}
              {/* {' '}
              {item.selected && <FontAwesome name="check" />} */}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown