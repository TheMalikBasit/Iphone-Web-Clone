export default function loading () {
    // This is the loading skeleton for the profile page
    // You can customize this to match your design
    const loadingSkeleton = () => (
        <div className='flex justify-center items-center h-screen'>
            <div className='animate-pulse bg-gray-200 rounded-lg w-1/2 h-1/2'></div>
        </div>
    )
  return <loadingSkeleton />
}
