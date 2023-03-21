import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pregunta } from '@data/interfaces/Pregunta';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  listaPreguntas(): Pregunta[] {
    return [
      {
        pais: 'Afganistán',
        capital: 'Kabul',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Afghanistan_%28Colored_Emblem%29.svg',
        descripcion:
          'Kabul es la capital de Afganistán. Se encuentra en el centro del país, en la llanura de Kabul, a 1.500 metros de altitud. La ciudad se encuentra en el valle del río Kabul, que atraviesa la ciudad de norte a sur.',
        pregunta: '¿Cuál es la capital de Afganistán?',
        respuesta: 'B',
        opciones: ['Kingstown', 'Kabul', 'Mamoutzou'],
      },
      {
        pais: 'Albania',
        capital: 'Tirana',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg',
        descripcion:
          'Tirana fue fundada como ciudad en 1614 por Sulejman Pasha, aunque la zona ha sido continuamente habitada desde la antigüedad.',
        pregunta: '¿Cuál es la capital de Albania?',
        respuesta: 'C',
        opciones: ['Adamstown', 'Yaren', 'Tirana'],
      },
      {
        pais: 'Argelia',
        capital: 'Alger',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
        descripcion:
          'Alger es conocida por los edificios encalados de la alcazaba, una medina con calles sinuosas y empinadas, palacios otomanos y una ciudadela en ruinas.',
        pregunta: '¿Cuál es la capital de Argelia?',
        respuesta: 'A',
        opciones: ['Alger', 'Bagdad', 'Dakar'],
      },
      {
        pais: 'Andorra',
        capital: 'Andorra la Vieja',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg',
        descripcion:
          'Andorra la Vieja es la capital de Andorra, en las montañas de los Pirineos, entre Francia y España. Es conocida como un centro de compras, con varias tiendas sobre la avenida Meritxell.',
        pregunta: '¿Cuál es la capital de Andorra?',
        respuesta: 'B',
        opciones: ['Buenos Aires', 'Andorra la Vieja', 'Santiago de Chile'],
      },
      {
        pais: 'Angola',
        capital: 'Luanda',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg',
        descripcion:
          'Luanda es la capital de Angola, en el océano Atlántico. Es conocida por sus playas de arena blanca y sus edificios coloniales, como el Palacio Presidencial, con su fachada de mármol blanco y azulejos azules.',
        pregunta: '¿Cuál es la capital de Angola?',
        respuesta: 'C',
        opciones: ['El Cairo', 'Budapest', 'Luanda'],
      },
      {
        pais: 'Anguila',
        capital: 'El valle',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Anguilla.svg',
        descripcion:
          'El valle es la capital de Anguila, una isla del Caribe. Es conocida por su playa de arena blanca, con vistas a las montañas de la isla. El Museo de la Historia de Anguila, en el antiguo edificio de la corte, presenta artefactos de la cultura indígena y colonial.',
        pregunta: '¿Cuál es la capital de Anguila?',
        respuesta: 'A',
        opciones: ['El valle', 'Kingstown', 'Mamoutzou'],
      },
      {
        pais: 'Antigua y Barbuda',
        capital: 'Saint John',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg',
        descripcion:
          'Saint John es la capital de Antigua y Barbuda, un país situado en las Antillas, en el mar Caribe. Con una población de 22 215 habitantes, Saint John es el centro comercial del país y el principal puerto de la isla de Antigua.',
        pregunta: '¿Cuál es la capital de Antigua y Barbuda?',
        respuesta: 'B',
        opciones: ['Beirut', 'Saint John', 'Kuwait'],
      },
      {
        pais: 'Argentina',
        capital: 'Buenos Aires',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
        descripcion:
          'Buenos Aires es la gran capital cosmopolita de Argentina. Su centro es la Plaza de Mayo, rodeada de imponentes edificios del siglo XIX, incluida la Casa Rosada, el icónico palacio presidencial que tiene varios balcones.',
        pregunta: '¿Cuál es la capital de Argentina?',
        respuesta: 'A',
        opciones: ['Buenos Aires', 'Quito', 'Lima'],
      },
      {
        pais: 'Armenia',
        capital: 'Ereván',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg',
        descripcion:
          'Ereván es la capital de Armenia y se caracteriza por su gran arquitectura de la era soviética. La biblioteca Matenadarán, que se encuentra en la avenida principal, alberga miles de manuscritos antiguos griegos y armenios.',
        pregunta: '¿Cuál es la capital de Armenia?',
        respuesta: 'C',
        opciones: ['Tegucigalpa', 'San José', 'Ereván'],
      },
      {
        pais: 'Aruba',
        capital: 'Oranjestad',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg',
        descripcion:
          'Oranjestad es la capital de la isla neerlandesa de Aruba, en el mar Caribe. Cerca del puerto deportivo, el Fuerte Zoutman del siglo XVIII y la Torre Willem III, antiguamente un faro, albergan el Museo Histórico, que documenta el pasado de la isla.',
        pregunta: '¿Cuál es la capital de Aruba?',
        respuesta: 'A',
        opciones: ['Oranjestad', 'Varsovia', 'La Habana'],
      },
      {
        pais: 'Australia',
        capital: 'Canberra',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
        descripcion:
          'Canberra es la capital de Australia, con una población superior a los 345.000 habitantes. Es sede del Territorio de la Capital Australiana, ubicada en la parte norte del mismo, 300 kilómetros al sudoeste de Sídney y 650 kilómetros al noreste de Melbourne.',
        pregunta: '¿Cuál es la capital de Australia?',
        respuesta: 'B',
        opciones: ['Windhoek', 'Canberra', 'Berlín'],
      },
      {
        pais: 'Austria',
        capital: 'Viena',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg',
        descripcion:
          'Viena, la capital de Austria, se encuentra en la zona este del país en el río Danubio. Su legado artístico e intelectual se formó gracias a sus residentes, incluidos Mozart, Beethoven y Sigmund Freud.',
        pregunta: '¿Cuál es la capital de Austria?',
        respuesta: 'C',
        opciones: ['Wellington', 'Abu Dhabi', 'Viena'],
      },
      {
        pais: 'Azerbaiyán',
        capital: 'Bakú',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg',
        descripcion:
          'Bakú, la capital y centro comercial de Azerbaiyán, se ubica en la costa del Mar Caspio. Es famosa por su centro antiguo, medieval y amurallado, donde se encuentra el Palacio de los Shirvanshahs, un gran complejo real, además de la icónica torre de piedra Maiden.',
        pregunta: '¿Cuál es la capital de Azerbaiyán?',
        respuesta: 'A',
        opciones: ['Bakú', 'Moroni', 'Belgrado'],
      },
      {
        pais: 'Bahamas',
        capital: 'Nasáu',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg',
        descripcion:
          'Nasáu es la capital de las Bahamas. Se ubica en la isla de Nueva Providencia y se puede acceder a la cercana Isla Paraíso a través de los puentes de la bahía de Nasáu. Es una parada popular para los cruceros y tiene un paisaje montañoso.',
        pregunta: '¿Cuál es la capital de Bahamas?',
        respuesta: 'B',
        opciones: ['Basseterre', 'Nasáu', 'Harare'],
      },
      {
        pais: 'Baréin',
        capital: 'Manama',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg',
        descripcion:
          'Manama es la moderna capital de Baréin, un país ubicado en una isla del golfo Pérsico. La ciudad se sitúa desde la antigüedad en el centro de las principales rutas comerciales.',
        pregunta: '¿Cuál es la capital de Baréin?',
        respuesta: 'C',
        opciones: ['Sarajevo', 'Vilna', 'Manama'],
      },
      {
        pais: 'Bangladesh',
        capital: 'Dhaka',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg',
        descripcion:
          'Dhaka es la capital de Bangladesh, al sur de Asia. Está situada junto al río Buriganga y es el epicentro del gobierno, el comercio y la cultura del país. En el siglo XVII fue la capital mogola de Bengala, y aún se conservan muchos palacios y mezquitas de la época.',
        pregunta: '¿Cuál es la capital de Bangladesh?',
        respuesta: 'A',
        opciones: ['Dhaka', 'Bujumbura', 'Alofi'],
      },
      {
        pais: 'Barbados',
        capital: 'Bridgetown',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg',
        descripcion:
          'Bridgetown, la capital de Barbados, es una ciudad portuaria en la costa suroeste de la isla. Es conocida por su arquitectura colonial británica y el hipódromo Garrison del siglo XVII.',
        pregunta: '¿Cuál es la capital de Barbados?',
        respuesta: 'B',
        opciones: ['Basseterre', 'Bridgetown', 'Papeete'],
      },
      {
        pais: 'Bielorrusia',
        capital: 'Minsk',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg',
        descripcion:
          'Minsk, es una moderna ciudad dominada por la monumental arquitectura estalinista. Muchos de sus museos, teatros y otras atracciones culturales bordean la avenida de la Independencia, una ancha vía pública de 15 km de largo que llega a la vasta Plaza de la Independencia.',
        pregunta: '¿Cuál es la capital de Bielorrusia?',
        respuesta: 'C',
        opciones: ['Sarajevo', 'Vilna', 'Minsk'],
      },
      {
        pais: 'Bélgica',
        capital: 'Bruselas',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg',
        descripcion:
          'Bruselas es la capital de Bélgica, de la Comunidad Francesa de Bélgica y de la Comunidad Flamenca. Se le conoce popularmente también como capital de la Unión Europea junto a Luxemburgo y Estrasburgo.',
        pregunta: '¿Cuál es la capital de Bélgica?',
        respuesta: 'A',
        opciones: ['Bruselas', 'Koror', 'Ámsterdam'],
      },
      {
        pais: 'Belice',
        capital: 'Belmopan',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg',
        descripcion:
          'Belmopán es la capital de Belice. En 2010, contaba con una población de 16.451. Aunque es la capital más pequeña de América, es la tercera ciudad más grande en Belice, detrás de la Ciudad de Belice y San Ignacio.',
        pregunta: '¿Cuál es la capital de Belice?',
        respuesta: 'B',
        opciones: ['Mascate', 'Belmopan', 'Túnez'],
      },
      {
        pais: 'Benín',
        capital: 'Porto Novo',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg',
        descripcion:
          'Porto Novo, también conocida como Hogbonou y Adjacé, es la capital y la segunda ciudad más grande de Benín, después de Cotonú. Porto Novo es la principal ciudad del país, tanto política como culturalmente.',
        pregunta: '¿Cuál es la capital de Benín?',
        respuesta: 'C',
        opciones: ['El Cairo', 'Gaborone', 'Porto Novo'],
      },
      {
        pais: 'Bután',
        capital: 'Timbu',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg',
        descripcion:
          'Timbu, la capital de Bután, se ubica en un valle en el noroeste del interior del país. Además de ser la sede del gobierno, la ciudad es conocida por sus templos budistas.',
        pregunta: '¿Cuál es la capital de Bután?',
        respuesta: 'A',
        opciones: ['Timbu', 'Ngerulmud', 'La Valeta'],
      },
      {
        pais: 'Bosnia y Herzegovina',
        capital: 'Sarajevo',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg',
        descripcion:
          'Sarajevo, la capital de Bosnia y Herzegovina, es una ciudad compacta en el río Miljacka, rodeada de los Alpes Dináricos. En el centro se encuentran museos que conmemoran la historia local.',
        pregunta: '¿Cuál es la capital de Bosnia y Herzegovina?',
        respuesta: 'B',
        opciones: ['Manama', 'Sarajevo', 'Asmara'],
      },
      {
        pais: 'Bolivia',
        capital: 'Sucre',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/1024px-Flag_of_Bolivia.svg.png',
        descripcion:
          'Sucre es una ciudad del altiplano austral de Bolivia. La Casa de la Libertad encalada es donde se firmó la Declaración de Independencia de Bolivia y alberga galerías relacionadas con el pasado de la ciudad como capital de la nación.',
        pregunta: '¿Cuál es la capital de Bolivia?',
        respuesta: 'C',
        opciones: ['Madrid', 'Lima', 'Sucre'],
      },
      {
        pais: 'Botsuana',
        capital: 'Gaborone',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg',
        descripcion:
          'Gaborone es la capital de Botsuana, con una población estimada de 246 325. Se localiza en el valle de los montes Kgale y Oodi, en la zona suroriental de Botsuana.',
        pregunta: '¿Cuál es la capital de Botsuana?',
        respuesta: 'A',
        opciones: ['Gaborone', 'Yakarta', 'Monaco-Ville'],
      },
      {
        pais: 'Brasil',
        capital: 'Brasilia',
        bandera: '//upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
        descripcion:
          'Brasilia, inaugurada como la capital de Brasil en 1960, es una ciudad planificada que se distingue por su arquitectura moderna blanca, cuyo diseño estuvo a cargo de Oscar Niemeyer.',
        pregunta: '¿Cuál es la capital de Brasil?',
        respuesta: 'B',
        opciones: ['Buenos Aires', 'Brasilia', 'Santiago de Chile'],
      },
      {
        pais: 'Bulgaria',
        capital: 'Sofía',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg',
        descripcion:
          'Sofía es la capital de la nación balcánica de Bulgaria. Se ubica en el oeste del país, bajo la montaña Vitosha. Los sitios icónicos de la ciudad reflejan más de 2,000 años de historia, incluidas las ocupaciones por parte de griegos, romanos, otomanos y soviéticos.',
        pregunta: '¿Cuál es la capital de Bulgaria?',
        respuesta: 'C',
        opciones: ['Bujumbura', 'Bamako', 'Sofía'],
      },
      {
        pais: 'Burkina Faso',
        capital: 'Uagadugú',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg',
        descripcion:
          'Uagadugú es la capital y principal ciudad de Burkina Faso, y el centro administrativo, de comunicaciones, cultural y económico de la nación.También es la ciudad más grande del país, con una población de 2,453,496 habitantes.',
        pregunta: '¿Cuál es la capital de Burkina Faso?',
        respuesta: 'A',
        opciones: ['Uagadugú', 'Canberra', 'Lisboa'],
      },
      {
        pais: 'Burundi',
        capital: 'Buyumbura',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg',
        descripcion:
          'Buyumbura es la antigua capital de Burundi y sede de su Gobierno, y actual ciudad más poblada del país.',
        pregunta: '¿Cuál es la capital de Burundi?',
        respuesta: 'B',
        opciones: ['Helsinki', 'Buyumbura', 'Kuwait'],
      },
      {
        pais: 'Camboya',
        capital: 'Nom Pen',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg',
        descripcion:
          'Phnom Penh, la ajetreada capital de Camboya, se ubica en la intersección de los ríos Mekong y Tonlé Sap. Fue un lugar central para el imperio Khmer y para los colonialistas franceses.',
        pregunta: '¿Cuál es la capital de Camboya?',
        respuesta: 'C',
        opciones: ['Bogotá', 'Nairobi', 'Nom Pen'],
      },
      {
        pais: 'Camerún',
        capital: 'Yaundé',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg',
        descripcion:
          'Yaundé, capital de Camerún, se extiende a lo largo de siete colinas, en la mitad sur del país. La catedral de Notre Dame des Victoires, levantada en el siglo XX, tiene un sorprendente techo triangular.',
        pregunta: '¿Cuál es la capital de Camerún?',
        respuesta: 'A',
        opciones: ['Yaundé', 'Manila', 'Banjul'],
      },
      {
        pais: 'Canadá',
        capital: 'Ottawa',
        bandera: '//upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg',
        descripcion:
          'Ottawa es la capital de Canadá, en la provincia de Ontario en el sureste, cerca de la ciudad de Montreal y la frontera con Estados Unidos. Ubicada en el río Ottawa, en su centro se ubica Parliament Hill, con una imponente arquitectura victoriana y museos.',
        pregunta: '¿Cuál es la capital de Canadá?',
        respuesta: 'B',
        opciones: ['washington D. C.', 'Ottawa', 'Dublín'],
      },
      {
        pais: 'Cabo Verde',
        capital: 'Praia',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg',
        descripcion:
          'Praia es la capital de Cabo Verde, frente a la costa de África Occidental. La ciudad está en la costa meridional de la isla de Santiago.',
        pregunta: '¿Cuál es la capital de Cabo Verde?',
        respuesta: 'C',
        opciones: ['Rabat', 'Kampala', 'Praia'],
      },
      {
        pais: 'República Centroafricana',
        capital: 'Bangui',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg',
        descripcion:
          "Bangui es la capital y la ciudad más grande de la República Centroafricana. Fue fundada por los franceses en 1889 como 'Bongai'",
        pregunta: '¿Cuál es la capital de la República Centroafricana?',
        respuesta: 'A',
        opciones: ['Bangui', 'Vaduz', 'Berna'],
      },
      {
        pais: 'Chad',
        capital: 'Yamena',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg',
        descripcion:
          'Yamena es la capital del Chad, y la ciudad con más habitantes del país. Hasta 1973 se le conoció con el nombre de Fort-Lamy. Tiene una población aproximada de 1 092 066 habitantes.',
        pregunta: '¿Cuál es la capital de Chad?',
        respuesta: 'B',
        opciones: ['Moscú', 'Yamena', 'Kuwait'],
      },
      {
        pais: 'Chile',
        capital: 'Santiago de Chile',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg',
        descripcion:
          'Santiago, la capital y la ciudad más grande de Chile, se ubica en un valle rodeado de cimas nevadas de los Andes y la Cordillera de la Costa chilena.',
        pregunta: '¿Cuál es la capital de Chile?',
        respuesta: 'C',
        opciones: ['Montevideo', 'París', 'Santiago de Chile'],
      },
      {
        pais: 'China',
        capital: 'Pekín',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
        descripcion:
          'Pekín, la enorme capital de China, tiene una historia que se remonta a 3 milenios. Aun así, es conocida tanto por su arquitectura moderna como por sus sitios antiguos, como el complejo de la Ciudad Prohibida, el palacio imperial durante las dinastías Ming y Qing.',
        pregunta: '¿Cuál es la capital de China?',
        respuesta: 'A',
        opciones: ['Pekín', 'Tokio', 'Seúl'],
      },
      {
        pais: 'Colombia',
        capital: 'Bogotá',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg',
        descripcion:
          'Bogotá es la extensa capital en altura de Colombia. La Candelaria, su centro con adoquines, cuenta con sitios coloniales como el Teatro Colón neoclásico y la Iglesia de San Francisco del siglo XVII.',
        pregunta: '¿Cuál es la capital de Colombia?',
        respuesta: 'B',
        opciones: ['Lima', 'Bogotá', 'Caracas'],
      },
      {
        pais: 'Comoras',
        capital: 'Moroni',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg',
        descripcion:
          'Moroni es la ciudad más grande de Comoras y desde 1962 su capital. En 2003 se estimaban unos 41.557 habitantes. En 2018 la estimación de la población era de 62.000.',
        pregunta: '¿Cuál es la capital de Comoras?',
        respuesta: 'C',
        opciones: ['Praga', 'Khartoum', 'Moroni'],
      },
      {
        pais: 'Congo',
        capital: 'Brazzaville',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg',
        descripcion:
          'Brazzaville es una ciudad ubicada en África, capital de la República del Congo, siendo además la principal población del país.',
        pregunta: '¿Cuál es la capital de Congo?',
        respuesta: 'A',
        opciones: ['Brazzaville', 'Lusaka', 'Kampala'],
      },
      {
        pais: 'Islas Cook',
        capital: 'Avarua',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_the_Cook_Islands.svg',
        descripcion:
          'Avarua es una localidad situada en la isla Rarotonga, y la capital de las Islas Cook. Avarua es la ciudad principal y se extiende al este del aeropuerto.',
        pregunta: '¿Cuál es la capital de las Islas Cook?',
        respuesta: 'B',
        opciones: ['Copenhague', 'Avarua', 'Ashgabat'],
      },
      {
        pais: 'Costa Rica',
        capital: 'San José',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg',
        descripcion:
          'San José, capital de Costa Rica, se ubica en la región del Valle Central con la Cordillera de Talamanca al sur y volcanes al norte.',
        pregunta: '¿Cuál es la capital de Costa Rica?',
        respuesta: 'B',
        opciones: ['Buenos Aires', 'San José', 'Asunción'],
      },
      {
        pais: 'Croacia',
        capital: 'Zagreb',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg',
        descripcion:
          'Zagreb, la capital de Croacia en el noroeste, se caracteriza por su arquitectura austrohúngara de los siglos XVIII y XIX.',
        pregunta: '¿Cuál es la capital de Croacia?',
        respuesta: 'A',
        opciones: ['Zagreb', 'Budapest', 'Belgrado'],
      },
      {
        pais: 'Cuba',
        capital: 'La Habana',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg',
        descripcion:
          'La Habana es la capital de Cuba. La arquitectura colonial española en el centro de la Habana Vieja del siglo XVI incluye el Castillo de la Fuerza Real, un fuerte y un museo marítimo.',
        pregunta: '¿Cuál es la capital de Cuba?',
        respuesta: 'B',
        opciones: ['Bogotá', 'La Habana', 'Caracas'],
      },
      {
        pais: 'Chipre',
        capital: 'Nicosia',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg',
        descripcion:
          'Nicosia, también conocida como Lefkosia, es la capital dividida de Chipre. Al sur de la frontera, en el lado griego, el Museo de Chipre exhibe hallazgos arqueológicos de los periodos del neolítico al bizantino.',
        pregunta: '¿Cuál es la capital de Chipre?',
        respuesta: 'C',
        opciones: ['Nom Pen', 'Ereván', 'Nicosia'],
      },
      {
        pais: 'República Checa',
        capital: 'Praga',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg',
        descripcion:
          'Praga, la capital de la República Checa, está dividida por el río Moldava. Recibe el apodo de la “Ciudad de las Cien Torres” y es conocida por la Plaza de la Ciudad Vieja.',
        pregunta: '¿Cuál es la capital de la República Checa?',
        respuesta: 'A',
        opciones: ['Praga', 'Budapest', 'Saint John'],
      },
      {
        pais: 'Dinamarca',
        capital: 'Copenhague',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg',
        descripcion:
          'Copenhague, la capital de Dinamarca, se ubica en las islas litorales de Selandia y Amager. Se conecta con Malmo en el sur de Suecia a través del puente Öresund.',
        pregunta: '¿Cuál es la capital de Dinamarca?',
        respuesta: 'B',
        opciones: ['Podgorica', 'Copenhague', 'Riad'],
      },
      {
        pais: 'Yibuiti',
        capital: 'Yibuti',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg',
        descripcion:
          'Yibuti es la capital del país africano de Yibuti, así como la ciudad de mayor tamaño de dicho Estado (su población en 2018 era de 562 000 habitantes).',
        pregunta: '¿Cuál es la capital de Yibuti?',
        respuesta: 'C',
        opciones: ['Kampala', 'Minsk', 'Yibuti'],
      },
      {
        pais: 'Dominica',
        capital: 'Roseau',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg',
        descripcion:
          'Roseau es la capital de Dominica y su ciudad más antigua e importante. Según el censo de 2007 tiene una población de 16.582 habitantes.',
        pregunta: '¿Cuál es la capital de Dominica?',
        respuesta: 'A',
        opciones: ['Roseau', 'Niamey', 'Castries'],
      },
      {
        pais: 'República Dominicana',
        capital: 'Santo Domingo de Guzmán',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg',
        descripcion:
          'Santo Domingo (oficialmente llamada Santo Domingo de Guzmán) es la capital de la República Dominicana. La ciudad está situada sobre el Mar Caribe.',
        pregunta: '¿Cuál es la capital de la República Dominicana?',
        respuesta: 'B',
        opciones: ['Kuala Lumpur', 'Santo Domingo de Guzmán', 'Mascate'],
      },
      {
        pais: 'Ecuador',
        capital: 'Quito',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg',
        descripcion:
          'Quito, la capital de Ecuador, se ubica en la altura de las laderas de los Andes a 2,850 m. Fue construida sobre los cimientos de una antigua ciudad inca y es famosa por su centro colonial bien conservado.',
        pregunta: '¿Cuál es la capital de Ecuador?',
        respuesta: 'C',
        opciones: ['Ciudad de Panamá', 'Asunción', 'Quito'],
      },
      {
        pais: 'Egipto',
        capital: 'El Cairo',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg',
        descripcion:
          'El Cairo, la extensa capital de Egipto, se ubica en el río Nilo. En su centro, se encuentra la plaza Tahrir y el vasto Museo Egipcio, un tesoro de antigüedades que incluye momias reales y artefactos bañados en oro del faraón Tutankamón.',
        pregunta: '¿Cuál es la capital de Egipto?',
        respuesta: 'A',
        opciones: ['El Cairo', 'Apia', 'Asmara'],
      },
      {
        pais: 'El Salvador',
        capital: 'San Salvador',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg',
        descripcion:
          'San Salvador es la capital y la urbe más grande de la República de El Salvador y una de las ciudades más pobladas de Centroamérica.',
        pregunta: '¿Cuál es la capital de El Salvador?',
        respuesta: 'B',
        opciones: ['San José', 'San Salvador', 'San Juan'],
      },
      {
        pais: 'Guinea Ecuatorial',
        capital: 'Malabo',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg',
        descripcion:
          'Malabo, en la isla de Bioko, es una ciudad portuaria y la capital de Guinea Ecuatorial. Hay muestras de la arquitectura colonial hispana, como la catedral neogótica de dos torres Santa Isabel.',
        pregunta: '¿Cuál es la capital de Guinea Ecuatorial?',
        respuesta: 'C',
        opciones: ['Asmara', 'Bissau', 'Malabo'],
      },
      {
        pais: 'Eritrea',
        capital: 'Asmara',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg',
        descripcion:
          'Asmara es la capital y la ciudad más poblada de Eritrea. Está localizada en la parte septentrional del Altiplano eritreo.',
        pregunta: '¿Cuál es la capital de Eritrea?',
        respuesta: 'A',
        opciones: ['Asmara', 'Rangún', 'Saná'],
      },
      {
        pais: 'Estonia',
        capital: 'Tallin',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg',
        descripcion:
          'Tallin, la capital de Estonia sobre el mar Báltico, es el centro cultural del país.',
        pregunta: '¿Cuál es la capital de Estonia?',
        respuesta: 'A',
        opciones: ['Tallin', 'Bakú', 'Bucarest'],
      },
      {
        pais: 'Etiopía',
        capital: 'Adís Abeba',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg',
        descripcion:
          'Adís Ababa, la extensa capital de Etiopía, se ubica en las sierras que bordean el Gran Valle del Rift y es el centro comercial y cultural del país.',
        pregunta: '¿Cuál es la capital de Etiopía?',
        respuesta: 'A',
        opciones: ['Adís Abeba', 'Papeete', 'Toskent'],
      },
      {
        pais: 'Islas Feroe',
        capital: 'Tórshavn',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands.svg',
        descripcion:
          'Tórshavn es la capital de las islas Feroe y se ubica en la isla de Streymoy. Es conocida por su casco antiguo, Tinganes.',
        pregunta: '¿Cuál es la capital de las Islas Feroe?',
        respuesta: 'A',
        opciones: ['Tórshavn', 'Suva', 'Tegucigalpa'],
      },
      {
        pais: 'Finlandia',
        capital: 'Helsinki',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg',
        descripcion:
          'Helsinki, la capital de Finlandia en el sur del país, se ubica en una península del golfo de Finlandia.',
        pregunta: '¿Cuál es la capital de Finlandia?',
        respuesta: 'A',
        opciones: ['Helsinki', 'Riga', 'Islamabad'],
      },
      {
        pais: 'Francia',
        capital: 'París',
        bandera: '//upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
        descripcion:
          'París, la capital de Francia, es una importante ciudad europea y un centro mundial del arte, la moda, la gastronomía y la cultura. Su paisaje urbano del siglo XIX está entrecruzado por amplios bulevares y el río Sena.',
        pregunta: '¿Cuál es la capital de Francia?',
        respuesta: 'B',
        opciones: ['Mbabane', 'París', 'Mogadiscio'],
      },
      {
        pais: 'Guayana Francesa',
        capital: 'Cayena',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_French_Guiana.svg',
        descripcion:
          'Cayena es la capital de la Guayana Francesa, en la costa noreste de Sudamérica. Su barrio antiguo del siglo XVII mezcla influencias de Francia, el Caribe y Brasil.',
        pregunta: '¿Cuál es la capital de la Guayana Francesa?',
        respuesta: 'A',
        opciones: ['Cayena', 'Bangkok', 'Pretoria'],
      },
      {
        pais: 'Polinesia Francesa',
        capital: 'Papeete',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_French_Polynesia.svg',
        descripcion:
          'Papeete se encuentra en Tahití y es la capital de la Polinesia Francesa, un grupo de islas en el Pacífico Sur.',
        pregunta: '¿Cuál es la capital de la Polinesia Francesa?',
        respuesta: 'A',
        opciones: ['Papeete', 'Nuuk', 'Puerto Moresby'],
      },
      {
        pais: 'Gabón',
        capital: 'Libreville',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg',
        descripcion:
          'Libreville es la capital de Gabón, país situado en la costa de África Central. En el paseo marítimo hay parques y esculturas.',
        pregunta: '¿Cuál es la capital de Gabón?',
        respuesta: 'A',
        opciones: ['Libreville', 'Amán', 'Estocolmo'],
      },
      {
        pais: 'Gambia',
        capital: 'Banjul',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg',
        descripcion:
          'Banjul es capital de Gambia, un pequeño país de África Occidental con frontera con Senegal. La ciudad se ubica en una isla donde el río Gambia desemboca en el océano Atlántico.',
        pregunta: '¿Cuál es la capital de Gambia?',
        respuesta: 'C',
        opciones: ['Bishkek', 'Astaná', 'Banjul'],
      },
      {
        pais: 'Georgia',
        capital: 'Tbilisi',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg',
        descripcion:
          'Tiflis es la capital de Georgia. Su ciudad antigua con adoquines refleja una historia larga y complicada, con períodos bajo el dominio persa y ruso.',
        pregunta: '¿Cuál es la capital de Georgia?',
        respuesta: 'B',
        opciones: ['Baku', 'Tbilisi', 'Yerevan'],
      },
      {
        pais: 'Alemania',
        capital: 'Berlín',
        bandera: '//upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
        descripcion:
          'Berlín, capital alemana, data del siglo XIII. Los elementos que recuerdan la turbulenta historia de la ciudad en el siglo XX incluyen el Monumento del Holocausto y los restos del Muro de Berlín con grafitis',
        pregunta: '¿Cuál es la capital de Alemania?',
        respuesta: 'B',
        opciones: ['Budapest', 'Berlín', 'Bratislava'],
      },
      {
        pais: 'Ghana',
        capital: 'Accra',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg',
        descripcion:
          'Accra es la capital de Ghana y está situada en la costa atlántica de África Occidental.',
        pregunta: '¿Cuál es la capital de Ghana?',
        respuesta: 'A',
        opciones: ['Accra', 'Lomé', 'Saint John'],
      },
      {
        pais: 'Grecia',
        capital: 'Atenas',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg',
        descripcion:
          'Atenas es la capital de Grecia. También se encontraba en el centro de la Antigua Grecia, un poderoso imperio y civilización. En la ciudad, aún predominan los sitios geográficos del siglo V a. C.',
        pregunta: '¿Cuál es la capital de Grecia?',
        respuesta: 'C',
        opciones: ['Viena', 'Berlín', 'Atenas'],
      },
      {
        pais: 'Groenlandia',
        capital: 'Nuuk',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg',
        descripcion:
          'Nuuk, la capital de Groenlandia, es una pequeña ciudad en la costa sudoeste del país. Su gran conjunto de fiordos es famoso por sus cascadas, icebergs y ballenas jorobadas.',
        pregunta: '¿Cuál es la capital de Groenlandia?',
        respuesta: 'B',
        opciones: ['Podgorica', 'Nuuk', 'Kampala'],
      },
      {
        pais: 'Granada',
        capital: 'Saint George',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg',
        descripcion:
          'Saint George es la capital de Granada. En el año 1999 su población era de 7500, con un núcleo de población de 33 000 personas.',
        pregunta: '¿Cuál es la capital de Granada?',
        respuesta: 'A',
        opciones: ['Saint George', 'Saint John', 'Saint Peter'],
      },
      {
        pais: 'Guadalupe',
        capital: 'Basse-Terre',
        bandera:
          '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png',
        descripcion:
          'Basse-Terre es una comuna francesa situada en el departamento y la región de Guadalupe.',
        pregunta: '¿Cuál es la capital de Guadalupe?',
        respuesta: 'A',
        opciones: ['Basse-Terre', 'Tórshavn', 'Uagadugú'],
      },
      {
        pais: 'Guatemala',
        capital: 'Ciudad de Guatemala',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg',
        descripcion:
          'La ciudad de Guatemala es la capital de Guatemala, en América Central. Es conocida por su historia maya, su ubicación a gran altitud y sus volcanes cercanos.',
        pregunta: '¿Cuál es la capital de Guatemala?',
        respuesta: 'C',
        opciones: ['San Salvador', 'San José', 'Ciudad de Guatemala'],
      },
      {
        pais: 'Guinea',
        capital: 'Conakri',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg',
        descripcion:
          'Conakri, es la capital y ciudad más grande de la República de Guinea. Geográficamente la ciudad se encuentra rodeada por el océano Atlántico',
        pregunta: '¿Cuál es la capital de Guinea?',
        respuesta: 'B',
        opciones: ['Mata-Utu', 'Conakri', 'Maseru'],
      },
      {
        pais: 'Guinea-Bisáu',
        capital: 'Bisáu',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg',
        descripcion:
          'Bisáu, también escrito como Bissau, es la capital de Guinea-Bisáu. Oficialmente es denominada Sector Autónomo de Bisáu por ser uno de los Sectores de Guinea-Bisáu, aunque autónomo.',
        pregunta: '¿Cuál es la capital de Guinea-Bisáu?',
        respuesta: 'A',
        opciones: ['Bisáu', 'Estocolmo', 'Port-Louis'],
      },
      {
        pais: 'Guyana',
        capital: 'Georgetown',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg',
        descripcion:
          'Georgetown es la capital de Guyana, en la costa del Atlántico Norte de Sudamérica.',
        pregunta: '¿Cuál es la capital de Guyana?',
        respuesta: 'C',
        opciones: ['Nueva Delhi', 'Lilongüe', 'Georgetown'],
      },
      {
        pais: 'Haití',
        capital: 'Puerto Príncipe',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg',
        descripcion:
          'Puerto Príncipe es la ciudad capital de Haití, situada en el distrito de Puerto Príncipe, del departamento Oeste.',
        pregunta: '¿Cuál es la capital de Haití?',
        respuesta: 'B',
        opciones: ['Bangui', 'Puerto Príncipe', 'Yuba'],
      },
      {
        pais: 'Santa Sede (Estado de la Ciudad del Vaticano)',
        capital: 'Ciudad del Vaticano',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg',
        descripcion:
          'La Ciudad del Vaticano, una ciudad estado ubicada dentro de Roma, Italia, es la sede central de la Iglesia Católica Romana. Es el hogar del Papa y es un tesoro de la arquitectura y el arte icónicos.',
        pregunta:
          '¿Cuál es la capital de Santa Sede (Estado de la Ciudad del Vaticano)?',
        respuesta: 'A',
        opciones: ['Ciudad del Vaticano', 'Roma', 'San Marino'],
      },
      {
        pais: 'Honduras',
        capital: 'Tegucigalpa',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg',
        descripcion:
          'Tegucigalpa es la capital de Honduras. Se encuentra en un valle rodeado de montañas. Es conocida por su arquitectura colonial española bien conservada.',
        pregunta: '¿Cuál es la capital de Honduras?',
        respuesta: 'C',
        opciones: ['Ulán Bator', 'El valle', 'Tegucigalpa'],
      },
      {
        pais: 'Hungría',
        capital: 'Budapest',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg',
        descripcion:
          'Budapest es la capital de Hungría, por la que cruza el río Danubio. Su Puente de las Cadenas del siglo XIX conecta el distrito montañoso de Buda con la plana Pest.',
        pregunta: '¿Cuál es la capital de Hungría?',
        respuesta: 'A',
        opciones: ['Budapest', 'Bucarest', 'Varsovia'],
      },
      {
        pais: 'Islandia',
        capital: 'Reikiavik',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg',
        descripcion:
          'Reikiavik, en la costa de Islandia, es la capital del país y su ciudad más grande. Cuenta con el Museo Nacional y el Museo de Saga, que recorren la historia vikinga de Islandia.',
        pregunta: '¿Cuál es la capital de Islandia?',
        respuesta: 'A',
        opciones: ['Reikiavik', 'Dalap-Uliga-Darrit', 'Saint George'],
      },
      {
        pais: 'India',
        capital: 'Nueva Delhi',
        bandera: '//upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
        descripcion:
          'Nueva Delhi es la capital federal de la República de la India y sede del poder ejecutivo, legislativo y judicial de su Gobierno. Está situada en la metrópolis de Delhi y es uno de sus nueve distritos.',
        pregunta: '¿Cuál es la capital de India?',
        respuesta: 'B',
        opciones: ['Islamabad', 'Nueva Delhi', 'Kabul'],
      },
      {
        pais: 'Indonesia',
        capital: 'Yakarta',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg',
        descripcion:
          'Yakarta, la enorme capital de Indonesia, se ubica en la costa noroeste de la isla de Java. Es conocida por su centro histórico, el distrito de Kota, con sus canales, edificios coloniales y mezquitas.',
        pregunta: '¿Cuál es la capital de Indonesia?',
        respuesta: 'A',
        opciones: ['Yakarta', 'Kuala Lumpur', 'Singapur'],
      },
      {
        pais: 'Irak',
        capital: 'Bagdad',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg',
        descripcion:
          'Bagdad es la capital federal y la ciudad más poblada de Irak. Su número de habitantes es de 8 765 000.',
        pregunta: '¿Cuál es la capital de Irak?',
        respuesta: 'A',
        opciones: ['Bagdad', 'Teherán', 'Kuwait'],
      },
      {
        pais: 'Irlanda',
        capital: 'Dublín',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg',
        descripcion:
          'Dublín es la capital y la ciudad más poblada de Irlanda. Está situada en el este de la isla, en el condado de Dublín, en la costa este del país.',
        pregunta: '¿Cuál es la capital de Irlanda?',
        respuesta: 'C',
        opciones: ['Belfast', 'Londres', 'Dublín'],
      },
      {
        pais: 'Israel',
        capital: 'Jerusalén',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg',
        descripcion:
          'Jerusalén es una ciudad de Oriente Próximo, situada en los montes de Judea, entre el mar Mediterráneo y la ribera norte del mar Muerto.',
        pregunta: '¿Cuál es la capital de Israel?',
        respuesta: 'B',
        opciones: ['Tel Aviv', 'Jerusalén', 'Haifa'],
      },
      {
        pais: 'Italia',
        capital: 'Roma',
        bandera: '//upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
        descripcion:
          'Roma, la capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial.',
        pregunta: '¿Cuál es la capital de Italia?',
        respuesta: 'A',
        opciones: ['Roma', 'Milán', 'Nápoles'],
      },
      {
        pais: 'Jamaica',
        capital: 'Kingston',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg',
        descripcion:
          'Es la capital de Jamaica y su ciudad más grande, ubicada en la costa sureste de la isla. Kingston es la sede del gobierno de Jamaica y la capital comercial.',
        pregunta: '¿Cuál es la capital de Jamaica?',
        respuesta: 'A',
        opciones: ['Kingston', 'Portmore', 'Spanish Town'],
      },
      {
        pais: 'Japón',
        capital: 'Tokio',
        bandera: '//upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
        descripcion:
          'Tokio, la ajetreada capital de Japón, mezcla lo ultramoderno y lo tradicional, desde los rascacielos iluminados con neones hasta los templos históricos.',
        pregunta: '¿Cuál es la capital de Japón?',
        respuesta: 'C',
        opciones: ['Osaka', 'Nagoya', 'Tokio'],
      },
      {
        pais: 'Jordania',
        capital: 'Amán',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg',
        descripcion:
          'Amán es la capital de Jordania y es una ciudad moderna con varias ruinas antiguas.',
        pregunta: '¿Cuál es la capital de Jordania?',
        respuesta: 'B',
        opciones: ['Aqaba', 'Amán', 'Irbid'],
      },
      {
        pais: 'Kazajistán',
        capital: 'Astaná',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg',
        descripcion:
          'Astana es la capital de Kazajistán y está situada a orillas del río Ishim, al norte del país. En la orilla izquierda se encuentra la torre Bayterek, con una arquitectura ultramoderna.',
        pregunta: '¿Cuál es la capital de Kazajistán?',
        respuesta: 'B',
        opciones: ['Almaty', 'Astaná', 'Taraz'],
      },
      {
        pais: 'Kenia',
        capital: 'Nairobi',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg',
        descripcion:
          'Nairobi es la capital de Kenia. Además de su centro urbano, la ciudad tiene el Parque Nacional de Nairobi, una gran reserva de caza conocida por criar rinocerontes negros en peligro de extinción.',
        pregunta: '¿Cuál es la capital de Kenia?',
        respuesta: 'A',
        opciones: ['Nairobi', 'Mombasa', 'Kisumu'],
      },
      {
        pais: 'Kiribati',
        capital: 'Tarawa',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg',
        descripcion:
          'Tarawa es un atolón en el océano Pacífico central que fue la capital de la antigua colonia británica de las Islas Gilbert y Ellice. Tarawa Sur, la parte del sur del atolón, salvo Betio, es ahora la isla capital de la República de Kiribati.',
        pregunta: '¿Cuál es la capital de Kiribati?',
        respuesta: 'B',
        opciones: ['South Tarawa', 'Tarawa', 'Abaiang'],
      },
      {
        pais: 'Kuwait',
        capital: 'Kuwait',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg',
        descripcion:
          'La ciudad de Kuwait es conocida por su arquitectura moderna, que va desde los rascacielos hasta las impresionantes Torres de Kuwait',
        pregunta: '¿Cuál es la capital de Kuwait?',
        respuesta: 'C',
        opciones: ['Al Ahmadi', 'Al Jahra', 'Kuwait'],
      },
      {
        pais: 'Kirguistán',
        capital: 'Bishkek',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg',
        descripcion:
          'Biskek, también conocida como Bishkek es la capital y la ciudad más poblada de Kirguistán; también es el centro administrativo de la provincia de Chuy',
        pregunta: '¿Cuál es la capital de Kirguistán?',
        respuesta: 'A',
        opciones: ['Bishkek', 'Osh', 'Jalal-Abad'],
      },
      {
        pais: 'Letonia',
        capital: 'Riga',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg',
        descripcion:
          'Riga, la capital de Letonia, se ubica en el mar Báltico, en la desembocadura del río Daugava. Se la considera un centro cultural y alberga varios museos y salas de conciertos.',
        pregunta: '¿Cuál es la capital de Letonia?',
        respuesta: 'A',
        opciones: ['Riga', 'Liepaja', 'Jurmala'],
      },
      {
        pais: 'Líbano',
        capital: 'Beirut',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg',
        descripcion:
          'Beirut es la capital y principal puerto marítimo del Líbano. Perteneciente a la gobernación de Beirut, en 2019 se estimaba que su población era de unos 3 300 000 habitantes.',
        pregunta: '¿Cuál es la capital de Líbano?',
        respuesta: 'C',
        opciones: ['Sidon', 'Tripoli', 'Beirut'],
      },
      {
        pais: 'Lesoto',
        capital: 'Maseru',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg',
        descripcion:
          'Maseru es la capital y ciudad más poblada de Lesoto, situada a orillas del río Caledon, fronterizo con Sudáfrica. Es la capital del distrito homónimo.',
        pregunta: '¿Cuál es la capital de Lesoto?',
        respuesta: 'B',
        opciones: ['Mafeteng', 'Maseru', 'Quthing'],
      },
      {
        pais: 'Liberia',
        capital: 'Monrovia',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg',
        descripcion:
          'Monrovia es una ciudad de la costa atlántica de África, capital y la más poblada de toda la República de Liberia y del condado de Montserrado.',
        pregunta: '¿Cuál es la capital de Liberia?',
        respuesta: 'A',
        opciones: ['Monrovia', 'Gbarnga', 'Buchanan'],
      },
      {
        pais: 'Liechtenstein',
        capital: 'Vaduz',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg',
        descripcion:
          'Vaduz es la capital del Principado de Liechtenstein. Es la sede del arzobispado de Liechtenstein y un importante centro financiero internacional.',
        pregunta: '¿Cuál es la capital de Liechtenstein?',
        respuesta: 'A',
        opciones: ['Vaduz', 'Schaan', 'Balzers'],
      },
      {
        pais: 'Lituania',
        capital: 'Vilna',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg',
        descripcion:
          'Vilna, la capital de Lituania, es conocida por su arquitectura barroca, que se aprecia particularmente en la ciudad antigua medieval.',
        pregunta: '¿Cuál es la capital de Lituania?',
        respuesta: 'B',
        opciones: ['Kaunas', 'Vilna', 'Klaipeda'],
      },
      {
        pais: 'Luxemburgo',
        capital: 'Luxemburgo',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg',
        descripcion:
          'Luxemburgo es la capital de la pequeña nación europea del mismo nombre. Se construyó entre desfiladeros profundos, cortados por los ríos Alzette y Pétrusse.',
        pregunta: '¿Cuál es la capital de Luxemburgo?',
        respuesta: 'C',
        opciones: ['Echternach', 'Dudelange', 'Luxemburgo'],
      },
      {
        pais: 'Madagascar',
        capital: 'Antananarivo',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg',
        descripcion:
          'Antananarivo es la capital de Madagascar, en la zona montañosa central de la isla. ',
        pregunta: '¿Cuál es la capital de Madagascar?',
        respuesta: 'A',
        opciones: ['Antananarivo', 'Toamasina', 'Antsirabe'],
      },
      {
        pais: 'Malawi',
        capital: 'Lilongüe',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg',
        descripcion:
          'Lilongüe es la capital y mayor ciudad de Malaui. La ciudad se encuentra en la Región Central, a orillas del río Lilongüe, cerca de la frontera entre Malaui, Mozambique y Zambia.',
        pregunta: '¿Cuál es la capital de Malawi?',
        respuesta: 'B',
        opciones: ['Blantyre', 'Lilongüe', 'Mzuzu'],
      },
      {
        pais: 'Malasia',
        capital: 'Kuala Lumpur',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg',
        descripcion:
          'Kuala Lumpur es la capital de Malasia. En su moderno perfil, se destacan las Torres Petronas de 451 m de altura, un par de rascacielos cubiertos de vidrio y acero con diseños islámicos.',
        pregunta: '¿Cuál es la capital de Malasia?',
        respuesta: 'A',
        opciones: ['Kuala Lumpur', 'George Town', 'Ipoh'],
      },
      {
        pais: 'Maldivas',
        capital: 'Malé',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg',
        descripcion:
          'Malé es la capital densamente poblada de las Maldivas, un país insular en el océano Índico. Es conocida por sus mezquitas y construcciones de colores.',
        pregunta: '¿Cuál es la capital de Maldivas?',
        respuesta: 'A',
        opciones: ['Malé', 'Hulhumale', 'Fuvahmulah'],
      },
      {
        pais: 'Mali',
        capital: 'Bamako',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg',
        descripcion:
          'Bamako o Bámako es la capital de Malí, se encuentra a orillas del río Níger en el sudoeste del país.',
        pregunta: '¿Cuál es la capital de Mali?',
        respuesta: 'B',
        opciones: ['Koulikoro', 'Bamako', 'Sikasso'],
      },
      {
        pais: 'Malta',
        capital: 'La Valeta',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg',
        descripcion:
          'La Valeta (o Il-Belt Valletta en maltés) es la pequeña capital de la isla estado de Malta, ubicada en el Mediterráneo.',
        pregunta: '¿Cuál es la capital de Malta?',
        respuesta: 'C',
        opciones: ['Gozo', 'Marsaxlokk', 'La Valeta'],
      },
      {
        pais: 'Islas Marshall',
        capital: 'Dalap-Uliga-Darrit',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg',
        descripcion:
          'Delap-Uliga-Djarrit es la capital y la ciudad más grande de las Islas Marshall con 20.301 personas. La ciudad está ubicada en el atolón de Majuro.',
        pregunta: '¿Cuál es la capital de las Islas Marshall?',
        respuesta: 'A',
        opciones: ['Delap-Uliga-Djarrit', 'Majuro', 'Ailuk'],
      },
      {
        pais: 'Mauritania',
        capital: 'Nuakchot',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg',
        descripcion:
          'Nuakchot es la capital y ciudad más poblada de Mauritania. Es una de las ciudades más grandes del Sahel y también sirve como centro administrativo y económico de Mauritania.',
        pregunta: '¿Cuál es la capital de Mauritania?',
        respuesta: 'B',
        opciones: ['Nouadhibou', 'Nuakchot', 'Zouerate'],
      },
      {
        pais: 'Mauricio',
        capital: 'Port-Louis',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg',
        descripcion:
          'Port Louis es la capital de Mauricio, en el océano Índico. Es conocida por su arquitectura colonial francesa y por el hipódromo del siglo XIX Champs de Mars.',
        pregunta: '¿Cuál es la capital de Mauricio?',
        respuesta: 'A',
        opciones: ['Port Louis', 'Quatre Bornes', 'Vacoas-Phoenix'],
      },
      {
        pais: 'Mayotte',
        capital: 'Mamoutzou',
        bandera: '//upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
        descripcion:
          'Mamoudzou es la capital del departamento de ultramar francés de Mayotte en el océano Índico. Mamoudzou es el municipio más poblado de Mayotte.',
        pregunta: '¿Cuál es la capital de Mayotte?',
        respuesta: 'B',
        opciones: ['Dzaoudzi', 'Mamoudzou', 'Koungou'],
      },
      {
        pais: 'México',
        capital: 'Ciudad de México',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
        descripcion:
          'Ciudad de México es la densamente poblada capital de México que se encuentra a gran altura.',
        pregunta: '¿Cuál es la capital de México?',
        respuesta: 'C',
        opciones: ['Tijuana', 'Guadalajara', 'Ciudad de México'],
      },
      {
        pais: 'Mónaco',
        capital: 'Monaco-Ville',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg',
        descripcion:
          'Monaco-Ville es un barrio de la ciudad-estado de Mónaco.Según el censo de 2016, tiene una población de 1064 habitantes.',
        pregunta: '¿Cuál es la capital de Mónaco?',
        respuesta: 'A',
        opciones: ['Monaco-Ville', 'La Condamine', 'Fontvieille'],
      },
      {
        pais: 'Mongolia',
        capital: 'Ulán Bator',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg',
        descripcion:
          'Ulán Bator es la capital de Mongolia. Se ubica en el valle del río Tuul y limita con el Parque Nacional Bogd Khan Uul.',
        pregunta: '¿Cuál es la capital de Mongolia?',
        respuesta: 'B',
        opciones: ['Darhan', 'Ulán Bator', 'Erdenet'],
      },
      {
        pais: 'Montenegro',
        capital: 'Podgorica',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg',
        descripcion:
          'Podgorica es la capital de Montenegro. Entre sus ríos y puentes están el moderno puente del Milenio sobre el Morača y el puente de piedra sobre el Ribnica.',
        pregunta: '¿Cuál es la capital de Montenegro?',
        respuesta: 'C',
        opciones: ['Budva', 'Bar', 'Podgorica'],
      },
      {
        pais: 'Montserrat',
        capital: 'Plymouth',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Montserrat.svg',
        descripcion:
          'Plymouth es una ciudad del condado de Devon, en el suroeste de Inglaterra. Se encuentra entre el río Plym y el río Tamar',
        pregunta: '¿Cuál es la capital de Montserrat?',
        respuesta: 'A',
        opciones: ['Plymouth', 'Brades', 'Saint Peter'],
      },
      {
        pais: 'Marruecos',
        capital: 'Rabat',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg',
        descripcion:
          'Rabat, la capital de Marruecos, está ubicada en la costa del río Bu Regreg y del océano Atlántico. Es conocida por sitios emblemáticos que muestran el patrimonio islámico y colonial francés.',
        pregunta: '¿Cuál es la capital de Marruecos?',
        respuesta: 'B',
        opciones: ['Casablanca', 'Rabat', 'Tánger'],
      },
      {
        pais: 'Mozambique',
        capital: 'Maputo',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg',
        descripcion:
          'Maputo es la capital de Mozambique, en África oriental. Es una ciudad portuaria del océano Índico con arquitectura colonial portuguesa.',
        pregunta: '¿Cuál es la capital de Mozambique?',
        respuesta: 'C',
        opciones: ['Beira', 'Nampula', 'Maputo'],
      },
      {
        pais: 'Myanmar',
        capital: 'Rangún',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg',
        descripcion:
          'Rangún (o Yangón) es la ciudad más grande de Birmania. El perfil de la ciudad se caracteriza por una mezcla de arquitectura colonial británica.',
        pregunta: '¿Cuál es la capital de Myanmar?',
        respuesta: 'A',
        opciones: ['Rangún', 'Mandalay', 'Naypyidaw'],
      },
      {
        pais: 'Namibia',
        capital: 'Windhoek',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg',
        descripcion:
          'Windhoek es la capital de Namibia. El nombre puede derivar del afrikáans Wind-Hoek o de las montañas Winterhoek.',
        pregunta: '¿Cuál es la capital de Namibia?',
        respuesta: 'B',
        opciones: ['Oshakati', 'Windhoek', 'Ondangwa'],
      },
      {
        pais: 'Nauru',
        capital: 'Yaren',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg',
        descripcion:
          'Yaren es uno de los 14 distritos de Nauru y una de las ocho circunscripciones electores del país.',
        pregunta: '¿Cuál es la capital de Nauru?',
        respuesta: 'C',
        opciones: ['Aiwo', 'Anabar', 'Yaren'],
      },
      {
        pais: 'Nepal',
        capital: 'Katmandú',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg',
        descripcion:
          'Katmandú, la capital de Nepal, se ubica en un valle rodeado por las montañas del Himalaya.',
        pregunta: '¿Cuál es la capital de Nepal?',
        respuesta: 'A',
        opciones: ['Katmandú', 'Pokhara', 'Biratnagar'],
      },
      {
        pais: 'paises Bajos',
        capital: 'Ámsterdam',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
        descripcion:
          'Amsterdam es la capital de los Países Bajos, conocida por su patrimonio artístico, su elaborado sistema de canales y sus casas angostas con fachadas de dos aguas.',
        pregunta: '¿Cuál es la capital de los Países Bajos?',
        respuesta: 'B',
        opciones: ['Rotterdam', 'Ámsterdam', 'La Haya'],
      },
      {
        pais: 'Nueva Caledonia',
        capital: 'Numea',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flags_of_New_Caledonia.svg/1920px-Flags_of_New_Caledonia.svg.png',
        descripcion:
          'Numea es la capital del territorio francés de ultramar Nueva Caledonia y de Provincia Sur. Según el censo de 2004, está poblada por 91.386 habitantes.',
        pregunta: '¿Cuál es la capital de Nueva Caledonia?',
        respuesta: 'C',
        opciones: ['Paita', 'Poum', 'Numea'],
      },
      {
        pais: 'Nueva Zelanda',
        capital: 'Wellington',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg',
        descripcion:
          'Wellington, la capital de Nueva Zelanda, se ubica cerca del punto más austral de la Isla Norte en el estrecho de Cook.',
        pregunta: '¿Cuál es la capital de Nueva Zelanda?',
        respuesta: 'A',
        opciones: ['Wellington', 'Auckland', 'Christchurch'],
      },
      {
        pais: 'Nicaragua',
        capital: 'Managua',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg',
        descripcion:
          'Managua se ubica en la costa sur del lago de Managua y es la capital de Nicaragua. Su catedral, solo el exterior desde un terremoto de 1972, se ubica en la Plaza de la Revolución.',
        pregunta: '¿Cuál es la capital de Nicaragua?',
        respuesta: 'B',
        opciones: ['Granada', 'Managua', 'León'],
      },
      {
        pais: 'Níger',
        capital: 'Niamey',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg',
        descripcion:
          'Niamey es la capital de Níger. Se localiza en el suroeste del país, en la margen derecha del río Níger.',
        pregunta: '¿Cuál es la capital de Níger?',
        respuesta: 'C',
        opciones: ['Zinder', 'Maradi', 'Niamey'],
      },
      {
        pais: 'Nigeria',
        capital: 'Abuja',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg',
        descripcion:
          'Abuya es la capital federal y la cuarta ciudad más poblada de Nigeria.',
        pregunta: '¿Cuál es la capital de Nigeria?',
        respuesta: 'A',
        opciones: ['Abuja', 'Lagos', 'Kano'],
      },
      {
        pais: 'Noruega',
        capital: 'Oslo',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
        descripcion:
          'Oslo, la capital de Noruega, se ubica en la costa sur del país en la cabecera del Fiordo de Oslo. Es famosa por sus áreas verdes y museos.',
        pregunta: '¿Cuál es la capital de Noruega?',
        respuesta: 'B',
        opciones: ['Bergen', 'Oslo', 'Trondheim'],
      },
      {
        pais: 'Omán',
        capital: 'Mascate',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg',
        descripcion:
          'Mascate, la capital portuaria de Omán, se ubica en el golfo de Omán, rodeada de montañas y desierto.',
        pregunta: '¿Cuál es la capital de Omán?',
        respuesta: 'C',
        opciones: ['Salalah', 'Nizwa', 'Mascate'],
      },
      {
        pais: 'Pakistán',
        capital: 'Islamabad',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg',
        descripcion:
          'Islamabad es la capital federal de Pakistán, situada en la meseta de Potwar al norte del país, dentro del Territorio Capital de Islamabad.',
        pregunta: '¿Cuál es la capital de Pakistán?',
        respuesta: 'A',
        opciones: ['Islamabad', 'Karachi', 'Lahore'],
      },
      {
        pais: 'Palau',
        capital: 'Koror',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg',
        descripcion:
          'Koror es la ciudad más poblada de Palaos, y es además cabecera del estado homónimo.',
        pregunta: '¿Cuál es la capital de Palau?',
        respuesta: 'B',
        opciones: ['Melekeok', 'Koror', 'Ngerulmud'],
      },
      {
        pais: 'Panamá',
        capital: 'Ciudad de Panamá',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg',
        descripcion:
          'Ciudad de Panamá, la capital de Panamá, es una ciudad moderna enmarcada por el océano Pacífico y el Canal de Panamá artificial.',
        pregunta: '¿Cuál es la capital de Panamá?',
        respuesta: 'C',
        opciones: ['Colón', 'David', 'Ciudad de Panamá'],
      },
      {
        pais: 'Papúa Nueva Guinea',
        capital: 'Puerto Moresby',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg',
        descripcion:
          'Puerto Moresby es la capital de Papúa Nueva Guinea, y su mayor aglomeración de población contando su área metropolitana que se extiende por todo el Distrito Capital Nacional.',
        pregunta: '¿Cuál es la capital de Papúa Nueva Guinea?',
        respuesta: 'A',
        opciones: ['Puerto Moresby', 'Lae', 'Mount Hagen'],
      },
      {
        pais: 'Paraguay',
        capital: 'Asunción',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg',
        descripcion:
          'Asunción es la ciudad capital de Paraguay rodeada por el río Paraguay. Es conocida por su gran Palacio de López, la sede de gobierno que alberga las oficinas presidenciales.',
        pregunta: '¿Cuál es la capital de Paraguay?',
        respuesta: 'B',
        opciones: ['Ciudad del Este', 'Asunción', 'Encarnación'],
      },
      {
        pais: 'Perú',
        capital: 'Lima',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg',
        descripcion:
          'Lima es la capital de Perú ubicada en la árida costa del Pacífico del país. Pese a que su centro colonial se conserva, es una desbordante metrópolis y una de las ciudades más grandes de Sudamérica.',
        pregunta: '¿Cuál es la capital de Perú?',
        respuesta: 'C',
        opciones: ['Arequipa', 'Cusco', 'Lima'],
      },
      {
        pais: 'Filipinas',
        capital: 'Manila',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg',
        descripcion:
          'Manila es la capital de Filipinas y es una ciudad costera densamente poblada en la isla de Luzón, donde se mezcla la arquitectura colonial española con modernos rascacielos.',
        pregunta: '¿Cuál es la capital de Filipinas?',
        respuesta: 'A',
        opciones: ['Manila', 'Cebú', 'Davao'],
      },
      {
        pais: 'Pitcairn',
        capital: 'Adamstown',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_the_Pitcairn_Islands.svg',
        descripcion:
          'Adamstown es el único asentamiento de la Isla Pitcairn y, como tal, la capital de las Islas Pitcairn.',
        pregunta: '¿Cuál es la capital de Pitcairn?',
        respuesta: 'B',
        opciones: ['Alofi', 'Adamstown', 'Kingston'],
      },
      {
        pais: 'Polonia',
        capital: 'Varsovia',
        bandera: '//upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg',
        descripcion:
          'Varsovia es la extensa capital de Polonia. Su amplia variedad arquitectónica refleja la larga y turbulenta historia de la ciudad.',
        pregunta: '¿Cuál es la capital de Polonia?',
        respuesta: 'C',
        opciones: ['Cracovia', 'Gdansk', 'Varsovia'],
      },
      {
        pais: 'Portugal',
        capital: 'Lisboa',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
        descripcion:
          'Lisboa es la capital costera y montañosa de Portugal. Desde el imponente castillo de San Jorge, la vista abarca los edificios de colores pastel en la ciudad antigua',
        pregunta: '¿Cuál es la capital de Portugal?',
        respuesta: 'A',
        opciones: ['Lisboa', 'Porto', 'Funchal'],
      },
      {
        pais: 'Puerto Rico',
        capital: 'San Juan',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg',
        descripcion:
          'San Juan, la capital y la ciudad más grande de Puerto Rico, se ubica en la costa del Atlántico de la isla.',
        pregunta: '¿Cuál es la capital de Puerto Rico?',
        respuesta: 'B',
        opciones: ['Ponce', 'San Juan', 'Bayamón'],
      },
      {
        pais: 'Catar',
        capital: 'Doha',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg',
        descripcion:
          'Doha, la capital de Catar en la península del golfo Pérsico, es una ciudad moderna en la bahía de Doha. En torno al centro frente al mar hay numerosos parques y el paseo costero Corniche.',
        pregunta: '¿Cuál es la capital de Catar?',
        respuesta: 'C',
        opciones: ['Al Khor', 'Al Wakrah', 'Doha'],
      },
      {
        pais: 'Rumanía',
        capital: 'Bucarest',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg',
        descripcion:
          'Bucarest, en el sur de Rumania, es la capital y el centro comercial del país. Su sitio icónico es el enorme edificio de gobierno Palacio del Parlamento de la época comunista, que tiene 1,100 habitaciones.',
        pregunta: '¿Cuál es la capital de Rumanía?',
        respuesta: 'A',
        opciones: ['Bucarest', 'Timisoara', 'Cluj-Napoca'],
      },
      {
        pais: 'Rusia',
        capital: 'Moscú',
        bandera: '//upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
        descripcion:
          'Moscú se ubica en el río Moscova en Rusia occidental y es la capital cosmopolita de la nación.',
        pregunta: '¿Cuál es la capital de Rusia?',
        respuesta: 'B',
        opciones: ['San Petersburgo', 'Moscú', 'Novosibirsk'],
      },
      {
        pais: 'Ruanda',
        capital: 'Kigali',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg',
        descripcion:
          'Kigali es la capital de Ruanda y también su ciudad más poblada. Se encuentra situada en el centro geográfico del país y pertenece a la provincia homónima.',
        pregunta: '¿Cuál es la capital de Ruanda?',
        respuesta: 'C',
        opciones: ['Butare', 'Gitarama', 'Kigali'],
      },
      {
        pais: 'San Cristóbal y Nieves',
        capital: 'Basseterre',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg',
        descripcion:
          'Basseterre es la capital de San Cristóbal y Nieves y de la parroquia de Saint George Basseterre. Tiene una población estimada de 19 000 habitantes.',
        pregunta: '¿Cuál es la capital de San Cristóbal y Nieves?',
        respuesta: 'A',
        opciones: ['Basseterre', 'Charlestown', 'Georgetown'],
      },
      {
        pais: 'Santa Lucía',
        capital: 'Castries',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg',
        descripcion:
          'Castries es la capital de Santa Lucía, un pequeño estado insular soberano del área del Caribe localizado en las Antillas Menores, entre San Vicente y las Granadinas y la Martinica.',
        pregunta: '¿Cuál es la capital de Santa Lucía?',
        respuesta: 'B',
        opciones: ['Vieux Fort', 'Castries', 'Gros Islet'],
      },
      {
        pais: 'San Vicente y las Granadinas',
        capital: 'Kingstown',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg',
        descripcion:
          'Kingstown es la capital de San Vicente y las Granadinas. Hasta el año 2001, la población es de 28.000 habitantes. Es la ciudad más poblada del país.',
        pregunta: '¿Cuál es la capital de San Vicente y las Granadinas?',
        respuesta: 'C',
        opciones: ['Castries', 'Kingstown Park', 'Kingstown'],
      },
      {
        pais: 'Samoa',
        capital: 'Apia',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg',
        descripcion:
          'Apia es la capital y ciudad más poblada de Samoa. Se encuentra localizada en la parte central de la costa norte de la isla Upolu, la segunda isla más grande del país.',
        pregunta: '¿Cuál es la capital de Samoa?',
        respuesta: 'A',
        opciones: ['Apia', 'Faleula', 'Riad'],
      },
      {
        pais: 'San Marino',
        capital: 'San Marino',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg',
        descripcion:
          'Ciudad de San Marino es la capital de la República de San Marino, situada sobre el monte Titano en los montes Apeninos en la península itálica cerca del mar Adriático.',
        pregunta: '¿Cuál es la capital de San Marino?',
        respuesta: 'B',
        opciones: ['Roma', 'San Marino', 'Milán'],
      },
      {
        pais: 'Santo Tomé y Príncipe',
        capital: 'Santo Tomé',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/1280px-Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png',
        descripcion:
          'Santo Tomé es la capital de la isla homónima, del distrito de Água Grande y del estado de Santo Tomé y Príncipe, en África Occidental.',
        pregunta: '¿Cuál es la capital de Santo Tomé y Príncipe?',
        respuesta: 'A',
        opciones: ['Santo Tomé', 'Príncipe', 'Santo Tomé y Príncipe'],
      },
      {
        pais: 'Arabia Saudí',
        capital: 'Riad',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg',
        descripcion:
          'Riad, la capital y el principal centro de negocios de Arabia Saudí, se encuentra en la zona central del país, sobre una meseta del desierto.',
        pregunta: '¿Cuál es la capital de Arabia Saudí?',
        respuesta: 'B',
        opciones: ['Damasco', 'Riad', 'Yeda'],
      },
      {
        pais: 'Senegal',
        capital: 'Dakar',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg',
        descripcion:
          'Dakar es la capital de Senegal, en África Occidental. Es un puerto en el Atlántico en la península de Cabo Verde.',
        pregunta: '¿Cuál es la capital de Senegal?',
        respuesta: 'A',
        opciones: ['Dakar', 'Bamako', 'Abuja'],
      },
      {
        pais: 'Serbia',
        capital: 'Belgrado',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg',
        descripcion:
          'Belgrado es la capital de Serbia, un país del sudeste europeo. Su monumento más importante es Beogradska Tvrđava, una imponente fortaleza en la confluencia de los ríos Danubio y Sava.',
        pregunta: '¿Cuál es la capital de Serbia?',
        respuesta: 'A',
        opciones: ['Belgrado', 'Nis', 'Novi Sad'],
      },
      {
        pais: 'Seychelles',
        capital: 'Victoria',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg',
        descripcion:
          'Victoria, a veces llamado Puerto Victoria o Mahé, es la capital de Seychelles, situada en el sector noreste de la isla Mahé.',
        pregunta: '¿Cuál es la capital de Seychelles?',
        respuesta: 'A',
        opciones: ['Victoria', 'Port Victoria', 'Mahé'],
      },
      {
        pais: 'Sierra Leona',
        capital: 'Ciudad Libre',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg',
        descripcion:
          'Ciudad Libre es la capital y ciudad más grande de Sierra Leona, además de ser su principal centro económico, financiero, cultural, educativo y político.',
        pregunta: '¿Cuál es la capital de Sierra Leona?',
        respuesta: 'B',
        opciones: ['Victoria', 'Ciudad Libre', 'Sierra Leona'],
      },
      {
        pais: 'Singapur',
        capital: 'Singapur',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg',
        descripcion:
          'Singapur es una ciudad-Estado, por lo que su capital se considera la ciudad de Singapur.',
        pregunta: '¿Cuál es la capital de Singapur?',
        respuesta: 'A',
        opciones: ['Singapur', 'Ciudad Libre', 'Doha'],
      },
      {
        pais: 'Eslovaquia',
        capital: 'Bratislava',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg',
        descripcion:
          'Bratislava es la capital de Eslovaquia y se ubica a lo largo del río Danubio, cerca de la frontera con Austria y Hungría.',
        pregunta: '¿Cuál es la capital de Eslovaquia?',
        respuesta: 'A',
        opciones: ['Bratislava', 'Budapest', 'Viena'],
      },
      {
        pais: 'Eslovenia',
        capital: 'Liubliana',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg',
        descripcion:
          'Liubliana es la capital y la ciudad más grande de Eslovenia. Es conocida por su población universitaria y las áreas verdes, incluido el extenso Parque Tivoli.',
        pregunta: '¿Cuál es la capital de Eslovenia?',
        respuesta: 'A',
        opciones: ['Liubliana', 'Budapest', 'Viena'],
      },
      {
        pais: 'Islas Salomón',
        capital: 'Honiara',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg',
        descripcion:
          'Honiara es la capital de las Islas Salomón. Se encuentra en la isla de Guadalcanal, aunque no pertenece a esa provincia, sino que tiene estatus de Territorio de la capital.',
        pregunta: '¿Cuál es la capital de las Islas Salomón?',
        respuesta: 'C',
        opciones: ['Islas Salomón', 'Guadalcanal', 'Honiara'],
      },
      {
        pais: 'Somalia',
        capital: 'Mogadiscio',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg',
        descripcion:
          'Mogadiscio es una ciudad del sureste de Somalia, capital federal del país y de la región de Benadir.',
        pregunta: '¿Cuál es la capital de Somalia?',
        respuesta: 'B',
        opciones: ['Hargeisa', 'Mogadiscio', 'Kismayo'],
      },
      {
        pais: 'Sudáfrica',
        capital: 'Pretoria',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg',
        descripcion:
          'Pretoria es una ciudad situada en la parte norte de la provincia de Gauteng, en Sudáfrica, dentro de la Municipalidad Metropolitana de la Ciudad de Tshwane.',
        pregunta: '¿Cuál es la capital de Sudáfrica?',
        respuesta: 'A',
        opciones: ['Pretoria', 'Johannesburgo', 'Durban'],
      },
      {
        pais: 'Sudán del Sur',
        capital: 'Yuba',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg',
        descripcion:
          'Yuba, también escrito como Juba, es la capital de la República de Sudán del Sur y la ciudad más poblada del país.',
        pregunta: '¿Cuál es la capital de Sudán del Sur?',
        respuesta: 'B',
        opciones: ['Islamabad', 'Yuba', 'Khartoum'],
      },
      {
        pais: 'España',
        capital: 'Madrid',
        bandera: '//upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
        descripcion:
          'Madrid es un municipio y una ciudad de España, con categoría histórica de villa, es la capital del Estado y de la Comunidad de Madrid.',
        pregunta: '¿Cuál es la capital de España?',
        respuesta: 'C',
        opciones: ['Valencia', 'Barcelona', 'Madrid'],
      },
      {
        pais: 'Sudán',
        capital: 'Jartum',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg',
        descripcion:
          'Jartum es la capital de Sudán y del estado homónimo. Se encuentra en el lugar donde el Nilo Blanco, procedente de Uganda.',
        pregunta: '¿Cuál es la capital de Sudán?',
        respuesta: 'C',
        opciones: ['Khartoum', 'El Cairo', 'Jartum'],
      },
      {
        pais: 'Surinam',
        capital: 'Paramaribo',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg',
        descripcion:
          'Paramaribo es la capital de Surinam, en las orillas del río Surinam. Es conocida por los edificios coloniales neerlandeses de madera adornados del centro.',
        pregunta: '¿Cuál es la capital de Surinam?',
        respuesta: 'A',
        opciones: ['Paramaribo', 'Ciudad del Cabo', 'Ciudad de México'],
      },
      {
        pais: 'Suazilandia',
        capital: 'Mbabane',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/1024px-Flag_of_Eswatini.svg.png',
        descripcion:
          'Mbabane es la capital administrativa de Suazilandia y del distrito de Hhohho.',
        pregunta: '¿Cuál es la capital de Suazilandia?',
        respuesta: 'B',
        opciones: ['Lobamba', 'Mbabane', 'Manzini'],
      },
      {
        pais: 'Suecia',
        capital: 'Estocolmo',
        bandera: '//upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg',
        descripcion:
          'Estocolmo, la capital de Suecia, abarca 14 islas y más de 50 puentes en un extenso archipiélago del mar Báltico.',
        pregunta: '¿Cuál es la capital de Suecia?',
        respuesta: 'C',
        opciones: ['Luxemburgo', 'Gotemburgo', 'Estocolmo'],
      },
      {
        pais: 'Suiza',
        capital: 'Berna',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg',
        descripcion:
          'Berna, la capital de Suiza, está construida en torno a un recodo del río Aar. Data del siglo XII, con arquitectura medieval preservada en el Altstadt (Ciudad vieja).',
        pregunta: '¿Cuál es la capital de Suiza?',
        respuesta: 'A',
        opciones: ['Berna', 'Zúrich', 'Ginebra'],
      },
      {
        pais: 'Tayikistán',
        capital: 'Dushanbe',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg',
        descripcion:
          'Dusambé es la capital y la ciudad más poblada de la república de Tayikistán.',
        pregunta: '¿Cuál es la capital de Tayikistán?',
        respuesta: 'A',
        opciones: ['Dushanbe', 'Tashkent', 'Ashgabat'],
      },
      {
        pais: 'Tailandia',
        capital: 'Bangkok',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg',
        descripcion:
          'Bangkok, la capital de Tailandia, es una extensa ciudad conocida por los santuarios ornamentados y la animada vida callejera.',
        pregunta: '¿Cuál es la capital de Tailandia?',
        respuesta: 'C',
        opciones: ['Pattaya', 'Chiang Mai', 'Bangkok'],
      },
      {
        pais: 'Togo',
        capital: 'Lomé',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg',
        descripcion:
          'Lomé, la extensa capital de Togo, es la ciudad más poblada del país. Tiene una población estimada de 1 754 641 habitantes.',
        pregunta: '¿Cuál es la capital de Togo?',
        respuesta: 'A',
        opciones: ['Lomé', 'Kara', 'Kpalimé'],
      },
      {
        pais: 'Tokelau',
        capital: 'Fakaofo',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Tokelau.svg',
        descripcion:
          'Fakaofo es un atolón de las islas Tokelau, dependientes de Nueva Zelanda.',
        pregunta: '¿Cuál es la capital de Tokelau?',
        respuesta: 'B',
        opciones: ['Atafu', 'Fakaofo', 'Nukunonu'],
      },
      {
        pais: 'Tonga',
        capital: 'Nukualofa',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg',
        descripcion:
          'Nukualofa es la capital y ciudad más poblada del Reino de Tonga, además de ser su centro político, económico y cultural.',
        pregunta: '¿Cuál es la capital de Tonga?',
        respuesta: 'B',
        opciones: ['Bangkok', 'Nukualofa', 'Nukunonu'],
      },
      {
        pais: 'Trinidad y Tobago',
        capital: 'Puerto España',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg',
        descripcion:
          'Puerto España es la capital de Trinidad y Tobago, ubicada en la costa noroeste de Trinidad. Es conocida por su enorme carnaval con música calipso y soca caribeña.',
        pregunta: '¿Cuál es la capital de Trinidad y Tobago?',
        respuesta: 'C',
        opciones: ['Madrid', 'San Fernando', 'Puerto España'],
      },
      {
        pais: 'Túnez',
        capital: 'Túnez',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg',
        descripcion:
          'Túnez es un país de África del Norte que limita con el mar Mediterráneo y el desierto del Sahara.',
        pregunta: '¿Cuál es la capital de Túnez?',
        respuesta: 'A',
        opciones: ['Túnez', 'Sfax', 'Sousse'],
      },
      {
        pais: 'Turquía',
        capital: 'Ankara',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg',
        descripcion:
          'Ankara, la capital cosmopolita de Turquía, se ubica en la región de Anatolia, en el centro del país.',
        pregunta: '¿Cuál es la capital de Turquía?',
        respuesta: 'B',
        opciones: ['Istanbul', 'Ankara', 'Izmir'],
      },
      {
        pais: 'Turkmenistán',
        capital: 'Ashgabat',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg',
        descripcion:
          'Asjabad es la capital y principal ciudad de Turkmenistán.',
        pregunta: '¿Cuál es la capital de Turkmenistán?',
        respuesta: 'C',
        opciones: ['Dushanbe', 'Tashkent', 'Ashgabat'],
      },
      {
        pais: 'Tuvalu',
        capital: 'Funafuti',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg',
        descripcion:
          'Funafuti es un atolón que forma la capital de Tuvalu, y a la vez es el centro económico del país. Tiene una población de 6194 habitantes, por lo que es el atolón más poblado del país.',
        pregunta: '¿Cuál es la capital de Tuvalu?',
        respuesta: 'A',
        opciones: ['Funafuti', 'Nukunonu', 'Atafu'],
      },
      {
        pais: 'Uganda',
        capital: 'Kampala',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg',
        descripcion:
          'Kampala es la capital nacional y comercial de Uganda, limítrofe con el lago Victoria, el más grande de África.',
        pregunta: '¿Cuál es la capital de Uganda?',
        respuesta: 'B',
        opciones: ['Kigali', 'Kampala', 'Bujumbura'],
      },
      {
        pais: 'Ucrania',
        capital: 'Kiev',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
        descripcion:
          'Kiev es la capital de Ucrania, dividida por el río Dniéper y conocida por su arquitectura religiosa, los monumentos seculares y los museos de historia.',
        pregunta: '¿Cuál es la capital de Ucrania?',
        respuesta: 'C',
        opciones: ['Minsk', 'Bucarest', 'Kiev'],
      },
      {
        pais: 'Emiratos Árabes Unidos',
        capital: 'Abu Dhabi',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg',
        descripcion:
          'Abu Dabi, la capital de los Emiratos Árabes Unidos, se ubica frente al territorio continental en una isla del golfo Pérsico.',
        pregunta: '¿Cuál es la capital de los Emiratos Árabes Unidos?',
        respuesta: 'A',
        opciones: ['Abu Dhabi', 'Dubái', 'Sharjah'],
      },
      {
        pais: 'Reino Unido',
        capital: 'Londres',
        bandera:
          '//upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
        descripcion:
          'Londres, la capital de Inglaterra y del Reino Unido, es una ciudad del siglo XXI con una historia que se remonta a la época romana.',
        pregunta: '¿Cuál es la capital del Reino Unido?',
        respuesta: 'B',
        opciones: ['Glasgow', 'Londres', 'Belfast'],
      },
      {
        pais: 'Estados Unidos',
        capital: 'Washington D. C.',
        bandera:
          '//upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
        descripcion:
          'Washington D. C., la capital de Estados Unidos, es una ciudad compacta junto al río Potomac, que bordea los estados de Maryland y Virginia.',
        pregunta: '¿Cuál es la capital de Estados Unidos?',
        respuesta: 'C',
        opciones: ['Nueva York', 'Chicago', 'Washington D. C.'],
      },
      {
        pais: 'Uruguay',
        capital: 'Montevideo',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg',
        descripcion:
          'Montevideo, la capital de Uruguay, es una importante ciudad de la Bahía de Montevideo. Se ubica en torno a la Plaza de la Independencia, donde alguna vez hubo una ciudadela española.',
        pregunta: '¿Cuál es la capital de Uruguay?',
        respuesta: 'A',
        opciones: ['Montevideo', 'Punta del Este', 'Colonia del Sacramento'],
      },
      {
        pais: 'Uzbekistán',
        capital: 'Toskent',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg',
        descripcion:
          'Taskent, la capital de Uzbekistán, es famosa por su gran cantidad de museos y su mezcla de arquitecturas moderna y soviética.',
        pregunta: '¿Cuál es la capital de Uzbekistán?',
        respuesta: 'B',
        opciones: ['Bakú', 'Toskent', 'Tashkent'],
      },
      {
        pais: 'Vanuatu',
        capital: 'Port Vila',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg',
        descripcion:
          'Port Vila es la capital y la ciudad más poblada de Vanuatu, con 44 039 habitantes según el censo de 2009.',
        pregunta: '¿Cuál es la capital de Vanuatu?',
        respuesta: 'C',
        opciones: ['Port Moresby', 'Nouméa', 'Port Vila'],
      },
      {
        pais: 'Wallis y Futuna',
        capital: 'Mata-Utu',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Wallis_and_Futuna.svg',
        descripcion:
          "Mata Utu, también conocida como Matā'utu, es la capital del Territorio de Ultramar francés de Wallis y Futuna, se encuentra ubicada en la isla Wallis, de la cual es también la ciudad principal.",
        pregunta: '¿Cuál es la capital de Wallis y Futuna?',
        respuesta: 'A',
        opciones: ['Mata-Utu', 'Hanga Roa', 'Apia'],
      },
      {
        pais: 'Yemen',
        capital: 'Saná',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg',
        descripcion:
          'Saná es la capital de Yemen. Posesión etíope en el siglo VI, la ciudad fue ocupada en numerosas ocasiones por el Imperio otomano.',
        pregunta: '¿Cuál es la capital de Yemen?',
        respuesta: 'B',
        opciones: ['Adén', 'Saná', 'Taiz'],
      },
      {
        pais: 'Zambia',
        capital: 'Lusaka',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg',
        descripcion:
          'Lusaka es la capital de Zambia, de la provincia de Lusaka y del distrito homónimo, además de la ciudad más poblada del país.',
        pregunta: '¿Cuál es la capital de Zambia?',
        respuesta: 'C',
        opciones: ['Lilongüe', 'Ndola', 'Lusaka'],
      },
      {
        pais: 'Zimbabue',
        capital: 'Harare',
        bandera:
          '//upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg',
        descripcion:
          'Harare es la ciudad más poblada y capital de Zimbabue. Tiene una población estimada de 1.600.000 habitantes, con unas 2.800.111 personas en su área metropolitana.',
        pregunta: '¿Cuál es la capital de Zimbabue?',
        respuesta: 'A',
        opciones: ['Harare', 'Bulawayo', 'Mutare'],
      },
    ];
  }


}
