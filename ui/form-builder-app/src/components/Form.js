function Form() {
    return(
        <div className={"form-card"}>
            <form>
                <label>Label</label>
                <input type="text"></input>
                <label>Type</label>
                <select>
                    <option>Multi-select</option>
                </select>
                <input type="checkbox"></input>
                <label>Default Value</label>
                <input type="text"></input>
                <label>Choices</label>
                <textarea></textarea>
                <button type="submit">Save</button>
                <a>Cancel</a>
            </form>
        </div>
    )
}

export default Form