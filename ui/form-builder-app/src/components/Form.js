import { useState } from 'react'

function Form() {
    
    const [formData, setFormData] = useState({
        label: "Favorite Football Team",
        multiSelect: true,
        required: false,
        defaultValue: "Michigan State",
        choices: ["Michigan State", "Texas"]
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
            alert("this choice already exists")
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

    // validation function
    // - label is present?
    // - 50+ choices?

    const formValidations = () => {
        if(label === "") { 
            alert("a label must be present") 
            return true
        }
        if(choices.length > 50) {
            alert("there can be no more than 50 answers for a question")
            return true
        } else {
            return false
        }
    }
// validations check
// default value in choices check

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
        } else {
            console.log(formData)
            defaultValueCheck()
        }

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
                <div className="row">
                    <label>Label</label>
                    <input name='label' onChange={onFormChange} value={label} type="text"></input>
                </div>
                <div className="row">
                    <label>Type</label>
                    <select name='multiselect'>
                        <option>Multi-select</option>
                    </select>
                    <input name='required' onChange={onFormChange} checked={required} type="checkbox"></input>
                    <label>A value is required</label>
                </div>
                <div className="row">
                    <label>Default Value</label>
                    <input name='defaultValue' onChange={onFormChange} value={defaultValue} type="text"></input>
                </div>
                <div className="row">
                    <label>Choices</label>
                    {choices.map(c => <button key={c} name={c} onClick={onDeleteChoice}>{c}</button>)}
                    <input value={newChoice} onChange={onChoiceChange} type="text" placeholder='add choice'></input>
                    <button type='click' onClick={onAddChoice}>➕</button>
                </div>
                <div className="row">
                    <button type="submit">Save</button>
                    <a>Cancel</a>
                    <button onClick={onClearForm}>Clear Form</button>
                </div>
            </form>
        </div>
    )
}

export default Form


// controlled component
// what does the formData state look like? 