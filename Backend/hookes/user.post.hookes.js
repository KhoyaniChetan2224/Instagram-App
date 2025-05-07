const { useState, useEffect } = require('react');
const axios = require('axios');

const useUserPosts = (userId) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!userId) return;

        const fetchPosts = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`/api/posts/user/${userId}`);
                setPosts(response.data);
            } catch (err) {
                setError(err.response ? err.response.data : 'Error fetching posts');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [userId]);

    return { posts, loading, error };
};

module.exports = useUserPosts;