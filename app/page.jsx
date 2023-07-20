import Feed from '@components/Feed'
const Home = () => {
  return (
    <div className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>AI powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Promptx is an AI powered prompting tool that helps you
        discover ,create and share creative prompts.
      </p>
      <Feed />
    </div>
  )
}

export default Home