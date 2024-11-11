// src/context/AuthContext.js

// Cria o contexto para autenticação, que pode ser compartilhado entre diferentes componentes
const AuthContext = createContext();

// Componente AuthProvider: 
// Ele fornece o estado de autenticação (se o usuário está logado ou não) para os componentes filhos.
export const AuthProvider = ({ children }) => {
  // Estado local que armazena se o usuário está logado
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Função para marcar o usuário como logado
  const login = () => setIsLoggedIn(true);
  
  // Função para marcar o usuário como deslogado
  const logout = () => setIsLoggedIn(false);

  // O componente AuthProvider envolve os filhos (children) e compartilha o estado de autenticação e as funções login/logout
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
// sistema aplicado para corrigir um erro presente