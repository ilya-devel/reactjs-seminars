export default function ShowMessages({listMessages}) {
    return listMessages.map((msg) => {
        return <div className="message" key={msg.id} id={msg.id}>
            {msg.message}
        </div>
    })
}