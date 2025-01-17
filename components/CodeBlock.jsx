import CodeSnippet from '@components/CodeSnippet'
import { useContext } from 'react'
import { Context } from '@context/context'

const GenerateCode = (desc, code) => {
	const { theme } = useContext(Context)

	return (
		<div className='flex flex-col'>
			<p className='w-fit'>{desc}</p>
			<CodeSnippet theme={theme} code={code} />
		</div>
	)
}

export default GenerateCode
