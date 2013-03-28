

// Convert an InputStream to String

  def convertStreamToString(is : InputStream) : String = {
    def inner(reader : BufferedReader, sb : StringBuilder) : String = {
      val line = reader.readLine()
      if(line != null) {
        try {
          inner(reader, sb.append(line + "\n"))
        } catch {
          case e : IOException => e.printStackTrace()
        } finally {
          try {
            is.close()
          } catch {
            case e : IOException => e.printStackTrace()
          }
        }
 
      }
      sb.toString()
    }
 
    inner(new BufferedReader(new InputStreamReader(is)), new StringBuilder())
  }


// Another way
import scala.io.Source
import java.io.InputStream

def convertStreamToString(is: InputStream) : String =
Source.fromInputStream(is).getLines.reduceLeft(_ + _)
