import { useState } from 'react'

function Form() {
    
    const [formData, setFormData] = useState({
        label: "string",
        multSelect: true,
        required: false,
        defaultValue: "default",
        choices: []
    })
    const [newChoice, setNewChoice] = useState("")

    const { label, required, choices, defaultValue, multiSelect } = formData

    const onChoiceChange = (e) => {
        setNewChoice(e.target.value)
    }

    const onAddChoice = (e) => {
        e.preventDefault()
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
    
    return(
        <div className={"form-card"}>
            <form>
                <div className="row">
                    <label>Label</label>
                    <input name='label' onChange={onFormChange} value={label} type="text"></input>
                </div>
                <div className="row">
                    <label>Type</label>
                    <select name='multi-select'>
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
                    {choices.map(c => <button name={c} onClick={onDeleteChoice}>{c}</button>)}
                    <input value={newChoice} onChange={onChoiceChange} type="text" placeholder='add choice'></input>
                    <button type='click' onClick={onAddChoice}>➕</button>
                </div>
                <div className="row">
                    <button type="submit">Save</button>
                    <a>Cancel</a>
                </div>
            </form>
        </div>
    )
}

export default Form


// controlled component
// what does the formData state look like? 