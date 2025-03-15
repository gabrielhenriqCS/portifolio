import NavBar from "../components/NavBar/NavBar";


export default function PublicLayout({children}) {
    return (
        <div className="page-projects">
            <NavBar/>
            {children}
        </div>
    )
}