import type { NextPage } from 'next'
import Head from 'next/head'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function getServerSideProps () {
  const users = await prisma.user.findMany()
  return {
    props: {
      users
    }
  }
}

const Home: NextPage = () => {
  
  


  return (
    <div>
      <Head>
        <title>Gastos Personales</title>
        <meta name="description" content="Aplicación para gestionar gastos personales" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Gastos Personales</h1>
        <h2>Usuarios</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>                
    </div>
  )
}

export default Home
