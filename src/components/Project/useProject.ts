const useProject = () => {
  const handleProjectImageError = (e: any) => {
    console.log(e);
    e.target.src = "images/project-image-fallback.jpg";
  };

  return {
    handleProjectImageError,
  };
};

export default useProject;
