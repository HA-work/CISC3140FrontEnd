
PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;


DROP TABLE IF EXISTS All_Data;


DROP TABLE IF EXISTS Cars;
DROP TABLE IF EXISTS Judges;        
DROP TABLE IF EXISTS Car_Scores;
        

DROP TABLE IF EXISTS Final_Car_Scores;

DROP TABLE IF EXISTS Judges_Final;

DROP TABLE IF EXISTS Make_List;


.separator ','



-- .mode csv

-- .import data_lab2/data.csv All_Data

-- For some reason this is not working

-- everything I read says it should create a new table

-- COPY All_Data FROM 'data_lab2.csv' DELIMITER ',';


-- One record has missing data


-- will try this way
-- needed to type everythin out
-- not a good way to do this
-- whi isnt the other methods working?
Create Table All_Data(
        Timestamp TIMESTAMP,
Email TEXT,
Name TEXT,
Year INTEGER,
Make TEXT,
Model TEXT,
Car_ID TEXT,
Judge_ID TEXT,





Judge_Name TEXT,
Racer_Turbo INTEGER,
Racer_Supercharged INTEGER,
Racer_Performance INTEGER,
Racer_Horsepower INTEGER,
Car_Overall INTEGER,
Engine_Modifications INTEGER,
Engine_Performance INTEGER,
Engine_Chrome INTEGER,
Engine_Detailing INTEGER,
Engine_Cleanliness INTEGER,
Body_Frame_Undercarriage INTEGER,
Body_Frame_Suspension INTEGER,
Body_Frame_Chrome INTEGER,
Body_Frame_Detailing INTEGER,
Body_Frame_Cleanliness INTEGER,
Mods_Paint INTEGER,
Mods_Body INTEGER,
Mods_Wrap INTEGER,
Mods_Rims INTEGER,
Mods_Interior INTEGER,
Mods_Other INTEGER,
Mods_ICE INTEGER,
Mods_Aftermarket INTEGER,
Mods_WIP INTEGER,
Mods_Overall INTEGER



);




-- .import --csv --skip 1 data_lab2/data.csv All_Data




Create Table Cars(
	Car_ID	TEXT PRIMARY KEY,
	Year	INTEGER,
	Make	TEXT,
	Model	TEXT,
	Name	TEXT,
	Email	TEXT
);







Create Table Make_List(
        Car_Make  TEXT PRIMARY KEY
        

);





Create Table Judges( 
        Judge_ID  TEXT PRIMARY KEY,        
        Judge_Name   TEXT        
      
);








Create Table Judges_Final(
        Judge_ID  TEXT PRIMARY KEY,
        Judge_Name   TEXT,



 Judge_Count INTEGER,

 Start_Time TIMESTAMP,

 End_Time TIMESTAMP,

 Judging_Duration_Min TIME,

 Average_Judge_Time_Min TIME






);





Create Table Car_Scores(
        Car_ID  TEXT PRIMARY KEY,
Racer_Turbo INTEGER,
Racer_Supercharged INTEGER,
Racer_Performance INTEGER,
Racer_Horsepower INTEGER,
Car_Overall INTEGER,
Engine_Modifications INTEGER,
Engine_Performance INTEGER,
Engine_Chrome INTEGER,
Engine_Detailing INTEGER,
Engine_Cleanliness INTEGER,
Body_Frame_Undercarriage INTEGER,
Body_Frame_Suspension INTEGER,
Body_Frame_Chrome INTEGER,
Body_Frame_Detailing INTEGER,
Body_Frame_Cleanliness INTEGER,
Mods_Paint INTEGER,
Mods_Body INTEGER,
Mods_Wrap INTEGER,
Mods_Rims INTEGER,
Mods_Interior INTEGER,
Mods_Other INTEGER,
Mods_ICE INTEGER,
Mods_Aftermarket INTEGER,
Mods_WIP INTEGER,
Mods_Overall INTEGER,
Total_Score,
Ranking  SERIAL,
Car_Make,
Car_Model,


Timestamp TIMESTAMP,
Email TEXT,
Name TEXT,
Year INTEGER,
Judge_ID TEXT,

Judge_Name TEXT

);


-- SERIAL does not work








Create Table Final_Car_Scores(
        Car_ID  TEXT,
Racer_Turbo INTEGER,
Racer_Supercharged INTEGER,
Racer_Performance INTEGER,
Racer_Horsepower INTEGER,
Car_Overall INTEGER,
Engine_Modifications INTEGER,
Engine_Performance INTEGER,
Engine_Chrome INTEGER,             
Engine_Detailing INTEGER,
Engine_Cleanliness INTEGER,
Body_Frame_Undercarriage INTEGER,
Body_Frame_Suspension INTEGER,
Body_Frame_Chrome INTEGER,
Body_Frame_Detailing INTEGER,
Body_Frame_Cleanliness INTEGER,
Mods_Paint INTEGER,
Mods_Body INTEGER,
Mods_Wrap INTEGER,
Mods_Rims INTEGER,
Mods_Interior INTEGER,
Mods_Other INTEGER,
Mods_ICE INTEGER,
Mods_Aftermarket INTEGER,
Mods_WIP INTEGER,
Mods_Overall INTEGER,
Total_Score,
Ranking INTEGER,
Car_Make ,
Car_Model,


Timestamp TIMESTAMP,
Email TEXT,
Name TEXT,
Year INTEGER,
Judge_ID TEXT,

Judge_Name TEXT


);












COMMIT;



.tables

.mode csv

--.import data_lab2/data.csv All_Data
-- import from cleaned data

.import cleanedLab2Data.csv All_Data





-- get rid of null
-- no easy way to just change them to 0


--.import --csv --skip 1 data_lab2/data.csv All_Data


-- it is not skipping

INSERT INTO Cars 
SELECT Car_ID, Year, Make, Model, Name, Email
FROM All_Data
WHERE Name != 'Name'

;



INSERT INTO Make_List
SELECT DISTINCT Make
FROM All_Data
WHERE Name != 'Name'
ORDER BY Make;


SELECT * FROM Make_List;





INSERT INTO Judges
SELECT DISTINCT Judge_ID, Judge_Name
FROM All_Data 
WHERE Name != 'Name'
ORDER BY Judge_ID;


--SELECT * FROM Judges;





INSERT INTO Car_Scores(Car_ID ,
Racer_Turbo ,
Racer_Supercharged ,
Racer_Performance ,
Racer_Horsepower ,
Car_Overall ,
Engine_Modifications ,
Engine_Performance ,
Engine_Chrome ,
Engine_Detailing ,
Engine_Cleanliness ,
Body_Frame_Undercarriage ,
Body_Frame_Suspension ,
Body_Frame_Chrome ,
Body_Frame_Detailing ,
Body_Frame_Cleanliness ,
Mods_Paint ,
Mods_Body ,
Mods_Wrap ,
Mods_Rims ,
Mods_Interior ,
Mods_Other ,
Mods_ICE ,
Mods_Aftermarket ,
Mods_WIP ,
Mods_Overall ,
Total_Score, Car_Make,

Car_Model,


Timestamp,
Email,
Name,
Year,
Judge_ID,

Judge_Name
)
--
SELECT Car_ID, Racer_Turbo,Racer_Supercharged,
Racer_Performance,Racer_Horsepower,Car_Overall,Engine_Modifications,
Engine_Performance,Engine_Chrome,Engine_Detailing,
Engine_Cleanliness,Body_Frame_Undercarriage,
Body_Frame_Suspension,Body_Frame_Chrome,
Body_Frame_Detailing,Body_Frame_Cleanliness,Mods_Paint,Mods_Body,Mods_Wrap,Mods_Rims,Mods_Interior,Mods_Other,Mods_ICE,Mods_Aftermarket,Mods_WIP,Mods_Overall,
(
Racer_Turbo +
Racer_Supercharged +
 Racer_Performance +
Racer_Horsepower +
 Car_Overall +
Engine_Modifications +
Engine_Performance +
Engine_Chrome +
Engine_Detailing +
 Engine_Cleanliness +
Body_Frame_Undercarriage +
Body_Frame_Suspension +
Body_Frame_Chrome +
Body_Frame_Detailing +
Body_Frame_Cleanliness +
Mods_Paint +
Mods_Body +
Mods_Wrap +
Mods_Rims +
Mods_Interior +
Mods_Other +
Mods_ICE +
Mods_Aftermarket +
Mods_WIP +
Mods_Overall) AS Total_Score, Make, Model, 
Timestamp,
Email,
Name,
Year,
Judge_ID,

Judge_Name


FROM All_Data 
WHERE Name != 'Name'
ORDER BY Total_Score DESC;

-- is there a way to select columns by data type?

-- rank not working

-- rowid

-- autoincrement not working

-- how to add rankings?



--SELECT Ranking, Total_Score, Car_ID FROM Car_Scores;
--SERIAL does not work


-- why cant I change the table name to Car_Scores?


--ALTER TABLE Car_Scores
--ADD Ranking INTEGER  AUTO_INCREMENT;



INSERT INTO Final_Car_Scores
SELECT Car_ID, Racer_Turbo,Racer_Supercharged,
Racer_Performance,Racer_Horsepower,Car_Overall,Engine_Modifications,
Engine_Performance,Engine_Chrome,Engine_Detailing,
Engine_Cleanliness,Body_Frame_Undercarriage,
Body_Frame_Suspension,Body_Frame_Chrome,
Body_Frame_Detailing,Body_Frame_Cleanliness,
Mods_Paint,Mods_Body,Mods_Wrap,Mods_Rims,Mods_Interior,Mods_Other,
Mods_ICE,Mods_Aftermarket,Mods_WIP,Mods_Overall,
Total_Score, rowid, Car_Make, Car_Model,
Timestamp,
Email,
Name,
Year,
Judge_ID,

Judge_Name

FROM Car_Scores
ORDER BY Total_Score DESC;






--SELECT Ranking,  Car_ID, Total_Score FROM Final_Car_Scores;


-- because autoincrement is not working will need to copy into another table 
-- and use rowid




-- add the new columns try joining


--ALTER TABLE Cars
--ADD Total_Score INTEGER;

--, Final_Car_Scores.Total_Score, Final_Car_Scores.Car_ID

--SELECT  Ranking
--FROM Final_Car_Scores
--LEFT JOIN Final_Car_Scores ON Final_Car_Scores.Car_ID=Cars.Car_ID;


.headers on
.mode csv
.output Lab2SampleOutputs/extract1.csv


SELECT A.[Ranking],A.[Total_Score], B.[Car_ID], B.[Make], B.[Model], B.[Year] FROM Final_Car_Scores A 
INNER JOIN Cars B ON A.Car_ID = B.Car_ID;


.output stdout


--SELECT TOP 3 A.[Ranking],A.[Total_Score], B.[Car_ID], B.[Make], B.[Model], B.[Year] FROM Final_Car_Scores A
--INNER JOIN Cars B ON A.Car_ID = B.Car_ID;

--GROUP BY B.[Make]
--ORDER BY A.[Ranking];





.headers on
.mode csv
.output Lab2SampleOutputs/extract2.csv

--This is the best I could do
-- cant limit it to 3 cars per make

SELECT A.[Ranking],A.[Total_Score], B.[Car_ID], B.[Make], B.[Model], B.[Year] FROM Final_Car_Scores A
INNER JOIN Cars B ON A.Car_ID = B.Car_ID
ORDER BY B.[Make],  A.[Ranking]
;

-- LIMIT 3




.output stdout


--SELECT A.[Ranking],A.[Total_Score], B.[Car_ID], B.[Make], B.[Model], B.[Year] FROM Final_Car_Scores A
--INNER JOIN Cars B ON A.Car_ID = B.Car_ID
--WHERE LIMIT = 3
--ORDER BY B.[Make],  A.[Ranking]
--;
-- error hereat LIMIT = 3

--SELECT f.Ranking, (
--SELECT Car_Make FROM Make_List as m 
--WHERE m.Car_Make = f.Car_Make  LIMIT 3 )
--FROM Final_Car_Scores as f 
--;

-- working on here


--INSERT INTO Make_List
--VALUES('Jeep'),('Jeep'), ('Jeep');







SELECT m.Car_Make, (   
SELECT Ranking FROM Final_Car_Scores as f 
WHERE m.Car_Make = f.Car_Make )
FROM Make_List as m
ORDER BY m.Car_Make       
;










ALTER TABLE Judges
ADD Judge_Count INTEGER;

ALTER TABLE Judges      
ADD Start_Time TIMESTAMP;

ALTER TABLE Judges
ADD End_Time TIMESTAMP;

ALTER TABLE Judges
ADD Judging_Duration TIME;

ALTER TABLE Judges
ADD Average_Judge_Time TIME;


--SELECT Judge_ID, Judge_Name, COUNT(Judge_ID)
--FROM All_Data
--GROUP BY Judge_ID
--;

-- what about a where conditional to make sure the data is saved correctly?


--SELECT Judge_ID, Judge_Name, MIN(Timestamp)
--FROM All_Data
--GROUP BY Judge_ID;


--SELECT Judge_ID, Judge_Name, MAX(Timestamp)
--FROM All_Data
--GROUP BY Judge_ID;

--SELECT Judge_ID, Judge_Name, (MAX(Timestamp) - MIN(Timestamp))
--FROM All_Data
--GROUP BY Judge_ID;
-- does not work


--strftime('%M', end)


INSERT INTO Judges_Final

SELECT Judge_ID, Judge_Name, COUNT(Judge_ID), MIN(Timestamp), MAX(Timestamp),ROUND((JULIANDAY(MAX(Timestamp))-JULIANDAY( MIN(Timestamp))) * 1440),
((ROUND((JULIANDAY(MAX(Timestamp))-JULIANDAY( MIN(Timestamp))) * 1440))/COUNT(Judge_ID))

FROM ALL_Data
WHERE Judge_ID != 'Judge_ID'
GROUP BY Judge_ID

ORDER BY Judge_ID
;




.output stdout


SELECT * FROM Judges_Final;

-- maybe update the whole column?



.headers on
.mode csv
.output Lab2SampleOutputs/JudgeData.csv

SELECT * FROM Judges_Final;  


