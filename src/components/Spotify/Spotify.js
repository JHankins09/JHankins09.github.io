import React from 'react'

  const Spotify = () => (
    <div className="Spotify">
        <div className="sideBar">
        <body className="musicPlayer">
          <iframe title='fullSize' src="https://open.spotify.com/embed/album/4D9dffJZQAmoD3MtCPCFsR" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <iframe title='miniSize' src="https://open.spotify.com/embed/album/4D9dffJZQAmoD3MtCPCFsR" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </body>
      </div>
    </div>
  )

export default Spotify
