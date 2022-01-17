import { useState } from 'react'

function Form() {
    
    const [formData, setFormData] = useState({
        label: "string",
        type: {
            multSelect: true,
            required: true,
        },
        defaultValue: "default",
        choices: ["option1", "option2"]
    })
    const [newChoice, setNewChoice] = useState("")

    const { label, type, choices, defaultValue } = formData

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
    return(
        <div className={"form-card"}>
            <form>
                <div className="row">
                    <label>Label</label>
                    <input value={label} type="text"></input>
                </div>
                <div className="row">
                    <label>Type</label>
                    <select>
                        <option>Multi-select</option>
                    </select>
                    <input  value={type.required} type="checkbox"></input>
                    <label>A value is required</label>
                </div>
                <div className="row">
                    <label>Default Value</label>
                    <input  value={defaultValue} type="text"></input>
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