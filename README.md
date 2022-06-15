# Holydayzer
## My first back-end project at Driven Education's Fullstack Developer Bootcamp. 
A local server API for the brazillian calendar that lists all holidays and returns if today is a holiday or not.
### Usage

 **GET** `/holidays`
    
    Returns holidays list.
    
- **GET** `/is-today-holiday`
    
    Returns `“Sim, hoje é (nome-do-feriado)”` if today is a holiday and `“Não, hoje não é feriado”` otherwise
    
    - **Bônus:** Month Holidays
    
    You can consult the list of holidays for all 12 months, following the format below:
    
    **GET** `/holidays/1` - january
    
    **GET** `/holidays/2` - february
    
    **GET** `/holidays/3` - march
    
    ...
    
    **GET** `/holidays/12` - december
