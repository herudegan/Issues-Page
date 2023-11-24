import './filters.css'
import { MdArrowDropDown } from "react-icons/md";
import { BsTag } from "react-icons/bs";
import { LuMilestone } from "react-icons/lu";
import { openModal } from '../App';


export default function Filter_input() {

    return(
        <div className='row'>
            <div className='div-filters' onClick={openModal}>
                <p className='div-filters-text'>Filters</p>
                <MdArrowDropDown color='#ADBAC7' size={25} className='dropdown-icon'/>
            </div>
            <input type='text' placeholder={"Search all issues"} className='input-filters'/>
            <button className='button-label'><BsTag className='button-icon'/>Labels</button>
            <button className='button-milestones'><LuMilestone className='button-icon-mile'/>Milestones</button>
            <button className='button-new'>New</button>
        </div>
    )
}