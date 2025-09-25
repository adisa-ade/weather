export function formatDate(isoString) {
  const dateObj = new Date(isoString);

  return dateObj.toLocaleDateString("en-US", {
    weekday: "long",   
    month: "short",    
    day: "numeric",    
    year: "numeric",   
  });
}
