import Line1 from './Acoord'
const info = [
  {
    id: 1,
    title: 'Movie info',
    description: 'info bout movie',
  },
  { id: 2, title: 'News info', description: 'hello jdnc' },
  {
    id: 3,
    title: 'Countries info',
    description: 'hdsjbncx z',
  },
  {
    id: 4,
    title: 'Companies info',
    description: 'hbdsjanx hbehdhbasjn ',
  },
]

const Accordian = () => {
  return (
    <>
      {info.map((item) => {
        return (
          <Line1
            key={item.id}
            title={item.title}
            description={item.description}
          ></Line1>
        )
      })}
    </>
  )
}

export default Accordian
