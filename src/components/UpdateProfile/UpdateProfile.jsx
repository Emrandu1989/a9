import  { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (user) {
            setDisplayName(user.displayName || '');
            setPhotoURL(user.photoURL || '');
            setEmail(user.email || '');
        }
    }, [user]);

    const notify = () => toast("Profile updated successfully.");

    const handleSaveChanges = () => {
        if (!user) return;

        updateProfile(user, {
            displayName: displayName,
            photoURL: photoURL
        }).then(() => {
            console.log("Profile updated successfully.");
            notify();
            setTimeout(() => {
                window.location.reload();
            }, 10000);
        }).catch((error) => {
            console.error("Error updating profile:", error.message);
        });

    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <meta charSet="utf-8" />
                <title>LuxeLiveing || UpdateProfile</title>

            </Helmet>
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Update Your Profile
                    </h2>
                    <div className="flex justify-center my-5">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={photoURL} alt="User Avatar" />
                            </div>
                        </div>
                    </div>
                </div>
                <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="rounded-md shadow-sm">
                        <div className='mt-4'>
                            <label htmlFor="displayName" className="sr-only">Display Name</label>
                            <input id="displayName" name="displayName" type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} autoComplete="displayName" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Display Name" />
                        </div>
                
                        <div className='mt-4'>
                            <label htmlFor="photoURL" className="sr-only">Photo URL</label>
                            <input id="photoURL" name="photoURL" type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} autoComplete="photoURL" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Photo URL" />
                        </div>
                    </div>

                    <div>
                        <button onClick={handleSaveChanges} type="button" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;
