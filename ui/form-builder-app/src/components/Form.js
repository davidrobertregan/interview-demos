import { useState } from 'react'

function Form() {
    
    const [formData, setFormData] = useState({
        label: "Favorite College Team",
        multiSelect: true,
        required: false,
        defaultValue: "Michigan State",
        choices: ["Michigan State", "Texas", "Indiana"]
    })
    const [newChoice, setNewChoice] = useState("")

    const { label, required, choices, defaultValue, multiSelect } = formData

    const onChoiceChange = (e) => {
        setNewChoice(e.target.value)
    }

    const checkForDupicates = (choice) => {
        let duplicates = choices.filter(c => c === choice)
        if(duplicates.length > 0){
            return true
        }
        return false
    }

    const onAddChoice = (e) => {
        e.preventDefault()
        if(checkForDupicates(newChoice)) {
            alert("Whoops! It looks like this choice already exists.")
            return
        }

        setFormData({
            ...formData,
            choices: [...choices, newChoice]
        })
        setNewChoice("")
    }

    const onDeleteChoice = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            choices: choices.filter(c => c !== e.target.name)
        })
    }

    const onFormChange = (e) => {
        let key = e.target.name

        if(key === "required"){
            setFormData({
                ...formData,
                [key]: e.target.checked
            })
        } else {
            setFormData({
                ...formData,
                [key]: e.target.value
            })
        }
    }

    // this function (fires on handleSubmit) handles the following validations:
    // - the label is present
    // - there are no more than 50 choices

    const formValidations = () => {
        if(label === "") { 
            alert("Whoops, it look like you forgot the label.") 
            return true
        }
        if(choices.length > 50) {
            alert("You've reached the maximum of 50 choices")
            return true
        } else {
            return false
        }
    }

    const defaultValueCheck = () => {
        let arr = choices.filter(c => c === defaultValue)
        if(arr.length === 0){
            setFormData({
                ...formData,
                choices: [...choices, defaultValue]
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(formValidations()){
            console.log("gotcha!")
            return
        }
        defaultValueCheck()

        let body = {
            label: label,
            required: required,
            choices: choices,
            default: defaultValue,
            displayAlpha: true
        }

        fetch("http://www.mocky.io/v2/566061f21200008e3aabd919", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
        .then(data => console.log(data, body))
    }

    const onClearForm = (e) => {
        e.preventDefault()
        setFormData(
            {
                label: "",
                multiSelect: true,
                required: false,
                defaultValue: " ",
                choices: []
            })
    }

    return(
        <div className={"form-card"}>
            <form onSubmit={handleSubmit}>
                <h3>Field Builder</h3>
                <div className="column-container">
                    <label>Label</label>
                    <input name='label' onChange={onFormChange} value={label} type="text"></input>
                </div>
                <div className="column-container">
                    <label>Type</label>
                    <select name='multiselect'>
                        <option>Multi-select</option>
                    </select>
                </div>
                <div className='column-container'>
                    <label>A value is required</label>
                    <input name='required' onChange={onFormChange} checked={required} type="checkbox"></input>
                </div>
                <div className="column-container">
                    <label>Default Value</label>
                    <input name='defaultValue' onChange={onFormChange} value={defaultValue} type="text"></input>
                </div>
                <div className="column-container">
                    <label>Choices</label>
                    <div className='row-container'>
                    {choices.map(c => <button className='delete' key={c} name={c} onClick={onDeleteChoice}>{c}</button>)}
                    <input value={newChoice} onChange={onChoiceChange} type="text" placeholder='add choice'></input>
                    <button type='click' onClick={onAddChoice}>➕</button>
                    </div>
                </div>
                <div className="column-container">
                    <div></div>
                    <button className='submit' type="submit">Save changes</button>
                    <a onClick={onClearForm}>Cancel</a>
                </div>
            </form>
        </div>
    )
}

export default Form


// controlled component
// what does the formData state look like? 