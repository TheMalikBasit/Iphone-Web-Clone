// http://192.168.0.110:3000/Profile/Settings
// http://localhost:3000/Profile/Settings

export default function settings() {
    return (
        <div className='flex flex-col items-center justify-center self-center'>
            <h1>This page is nested in profile route</h1>
            <h1>This page displayed by layout page in profile dirctory</h1>
        </div>
    )
}
