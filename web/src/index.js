import React from 'react'
import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import { IdentityContextProvider } from 'react-netlify-identity-widget';
import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'

import './index.css'
import 'react-netlify-identity-widget/styles.css'
import '@reach/tabs/styles.css'

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <IdentityContextProvider url="https://redwood-journal.netlify.com">
      <RedwoodProvider>
        <Routes />
      </RedwoodProvider>
    </IdentityContextProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
