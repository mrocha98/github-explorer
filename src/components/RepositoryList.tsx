import { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

type Repository = {
  id: number
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/prisma-labs/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <header>
        <FaGithub size={32} />
        <h1>Prisma Labs repositories</h1>
      </header>

      <img src="https://avatars.githubusercontent.com/prisma-labs" alt="Logo" />
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  )
}
