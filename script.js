document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('imageUpload');
    const formData = new FormData();
    
    if (fileInput.files.length > 0) {
        formData.append('image', fileInput.files[0]);

        try {
            const response = await fetch('http://54.226.233.244:8501/upload-image', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                // Directly set the innerHTML with the formatted HTML response
                document.getElementById('recipeContent').innerHTML = data.message;
            } else {
                document.getElementById('recipeContent').innerHTML = '<p>Failed to get recipe.</p>';
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('recipeContent').innerHTML = '<p>Error processing request.</p>';
        }
    }
});