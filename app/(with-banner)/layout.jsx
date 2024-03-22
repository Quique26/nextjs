export default function Layout ({ children }) {
    return (
        <div>
            <marquee style={{ background: "#fff", color: "purple"}}>El mejor canal de Twitch de programacion: @midudev</marquee>
            {children}
        </div>
    )
}