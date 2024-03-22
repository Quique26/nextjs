export default function Layout ({ children }) {
    return (
        <div>
            <small style={{ background: "#fff", color: "purple"}}>El mejor canal de Twitch de programacion: @midudev</small>
            {children}
        </div>
    )
}