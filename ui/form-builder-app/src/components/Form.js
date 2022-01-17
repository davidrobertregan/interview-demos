function Form() {
    return(
        <div className={"form-card"}>
            <form>
                <div className="row">
                    <label>Label</label>
                    <input type="text"></input>
                </div>
                <div className="row">
                    <label>Type</label>
                    <select>
                        <option>Multi-select</option>
                    </select>
                    <input type="checkbox"></input>
                </div>
                <div className="row">
                    <label>Default Value</label>
                    <input type="text"></input>
                </div>
                <div className="row">
                    <label>Choices</label>
                    <textarea></textarea>
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