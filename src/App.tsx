import './App.css'

function App() {
console.log(import.meta.env.VITE_MY_TEST_SECRET)
    return (
        <div className="App">
            <h1>Lets start with Vite {import.meta.env.VITE_MY_TEST_SECRET}</h1>
        </div>
    )
}

export default App
