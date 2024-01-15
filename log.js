/**
 * Log a message to the console with a timestamp (hh:mm) and severity
 */
const log = (text, severity = 'INFO') => {
  console.log(`[${severity}] ${new Date().toLocaleTimeString()} - ${text}`)
}

export { log }