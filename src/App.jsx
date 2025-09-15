import { useState } from 'react'
import './App.css'

function App() {

  return (
    <main classname="container">
      <h1>Customs Tracker Bot Patch Notes</h1>
      <h2>9/13/25 Patch Notes</h2>

      <ol className="notes">
        <li>Winning team and losing team gain and lose the same amount respectively (between 16 and 40)</li>
        <li>Breeze and Fracture removed from the map pool</li>
      </ol>

      <h2>9/14/25 Patch Notes</h2>
      <ol className="notes">
        <li>/balance and /gamble added </li>
      </ol>

      <h2>9/15/25</h2>
      <ol className="notes">
        <li>Improved matchmaking and sides are randomized (Team A now starts T side, Team B now starts CT side)</li>
        <li>Betting closes after 2 minutes of creating match</li>
        <li>Bugfix: map no longer changes on using /sub or /swap</li>
        <li>Removed betting for now</li>
      </ol>
    </main>
  )
}

export default App
