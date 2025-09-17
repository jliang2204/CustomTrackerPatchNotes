import { useState } from 'react'
import './App.css'

function App() {

  return (
    <main classname="container">
      <h1>Customs Tracker Bot Patch Notes</h1>
      
      <h2>9/13/25</h2>
      <ol className="notes">
        <li>Winning team and losing team gain and lose the same amount respectively (between 16 and 40)</li>
        <li>Breeze and Fracture removed from the map pool</li>
      </ol>

      <h2>9/14/25</h2>
      <ol className="notes">
        <li>/balance and /gamble added </li>
      </ol>

      <h2>9/15/25</h2>
      <ol className="notes">
        <li>Improved matchmaking and sides are randomized (Team A now starts T side, Team B now starts CT side)</li>
        <li>Bugfix: map no longer changes on using /sub or /swap</li>
        <li>Removed betting for now</li>
      </ol>

      <h2>9/16/25</h2>
      <ol className="notes">
        <li>Fracture added back to map pool</li>
      </ol>

      <h2>9/17/25</h2>
      <ol className="notes">
        <p><strong>PRESEASON END | RANK 1: BOSSOSKILLS</strong></p>
        <li>Season 1 start</li>
        <li>Preset MMR's for existing players for season start.</li>
        <li>MMR system refactored.</li>
        <li>added /endgame and /link</li>
        <li>Adding later: safeguard to prevent the same map from being rolled twice in a row</li>
      </ol>
    </main>
  )
}

export default App
