const ServerComponent = async () => {
  const data = await (
    await fetch(`http://localhost:3000/api/test`, { cache: 'no-store' })
  ).json()
  const now = data['now']
  return <p>{`Now - ${now}`}</p>
}

export default ServerComponent
