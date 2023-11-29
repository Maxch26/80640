package mx.uv;
import static spark.Spark.*;
import com.google.gson.*;
/**
 * Hello world!
 *
 */
public class App 
{

    public static void main( String[] args )
    {

        String [] Usuario = new String[2];
        options("/*",(request,response)->{
            String accessControlRequestHeaders=request.headers("Access-Control-Request-Headers");
            if(accessControlRequestHeaders!=null){
            response.header("Access-Control-Allow-Headers",accessControlRequestHeaders);
            }
            String accessControlRequestMethod=request.headers("Access-Control-Request-Method");
            if(accessControlRequestMethod!=null){
            response.header("Access-Control-Allow-Methods",accessControlRequestMethod);
            }
            return "OK";
            });
            
            before((request,response)->response.header("Access-Control-Allow-Origin","*"));
            post("/datosAlmacenados" , (rq,rs) -> {
                String cachar = rq.body ();
                JsonParser v1 = new JsonParser();
                JsonElement v2= v1.parse(cachar);
                Usuario [0]= v2.getAsJsonObject().get("nombre").toString();
                Usuario [1]= v2.getAsJsonObject().get("apellido").toString();
                return "Se guardo";

                
            });
            get("/recuperar", (rq,rs) -> {
                return " se guardo: Nombre: '" + Usuario[0] + "' Apellido: '" + Usuario[1] + "'";
            });
    
            put("/modificar", (rq,rs) -> {
                String param = rq.body();
                JsonParser parser = new JsonParser();
                JsonElement arbol = parser.parse(param);
                
                Usuario[0] = arbol.getAsJsonObject().get("nombre").toString();
                Usuario[1] = arbol.getAsJsonObject().get("apellido").toString();
    
                return "datos de usuario modificados";
            });
    
            delete("/eliminar", (rq,rs) -> {
                Usuario[0] = "";
                Usuario[1] = "";
                return "datos de usuario eliminados";
        });
    }
}
