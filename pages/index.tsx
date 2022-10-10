import type { NextPage } from 'next'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <Wrapper>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </Wrapper>
  )
}

const Wrapper = styled.div.attrs({ className: 'flex flex-col' })``

export default Home
