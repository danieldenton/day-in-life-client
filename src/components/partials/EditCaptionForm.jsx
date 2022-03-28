export default function EditCaptionForm({ putCaption, captionForm, setCaptionForm }) {
    return (
        <>
            <form onSubmit={putCaption}>
                <label htmlFor="newCaption"></label>
                <input type="text" id="newCaption" placeholder="Enter new caption..." onChange={e => setCaptionForm(e.target.value)} value={captionForm} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}