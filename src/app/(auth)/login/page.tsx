export default function Login() {
	return <div className='w-50 h-50 content-center hover:content-around' >
	<form className=" grid gap-5 w-max h-max"  >
		<input className="border-2 rounded border-l-blue-300" type="text" placeholder="Username" />
		<input type="password" placeholder="Password" />
	</form>
	</div>
}
