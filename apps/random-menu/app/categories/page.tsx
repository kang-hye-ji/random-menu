import dynamic from 'next/dynamic'

const ContainerCategories = dynamic(
  () => import('../../src/components/categories/ContainerCategories'),
  {
    ssr: false,
  },
)

const CategoriesPage = (): JSX.Element => {
  return <ContainerCategories />
}

export default CategoriesPage
