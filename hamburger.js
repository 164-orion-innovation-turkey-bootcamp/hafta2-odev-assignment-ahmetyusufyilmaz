var materialList = {pickle: 5,sauce: 5,onion: 5,meatball: 5,chicken: 5,tomato: 5,bread: 5,fries: 5,coke: 5,};
var meatType;

async function stockControl(materialList) {
    
  return Object.values(materialList).every((element) => element > 0);
}
stockControl(materialList);

function newTodo(todo, timeout) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(console.log(todo.description));
          
      }, timeout);
  });
}

let order = (stock, work) => {
  return new Promise((resolve, reject) => {
    if (stockControl) {
      setTimeout(() => {
        resolve(work());
      }, stock);
    } else {
      reject(console.log('Stok yetersiz'));
    }
  });
};

async function wait(cookTime,message) {
  setTimeout(()=>{
    console.log(message);
  },cookTime)
}

orderControl();
async function orderControl() {
  console.log("Sipariş alındı");
  console.log("Stok kontrolü yapıldı");
  await meatOrChicken();
}

async function meatOrChicken() {
  meatType = prompt("Köfte mi, tavuk mu?");
  console.log(`${meatType} Seçildi`);
  meatTypeChoose(meatType);
  }

  async function meatTypeChoose(meatType) {
    if(meatType==="Köfte")
    {
    const cook = prompt("Pişme Derecesi? (Az/Orta/Çok)");
    console.log(`${cook} Pişecek`);
    
     if(cook=="Az")
      {
       await wait(2000,"Az pişirildi")
      }
    
      else if(cook=="Orta")
      {
        await wait(3000,"Orta pişirildi.");
      }
        else if(cook=="Çok")
      {
        await wait(4000,"Çok pişirildi.");
      }
    
    }
    else if(meatType=="Tavuk")
    {
      await wait(3000,"Tavuk pişirildi.");
     
    }
    await wait(2000,`${meatType} (1 adet), Marul(1 adet), Domates(1 adet), Turşu(1 adet), Soğan(1 adet) hamburger ekmeğiyle birleştiriliyor`);
    await stockDecrease(meatType,materialList);
    await preparing(materialList);
  }


async function stockDecrease(meatType, materialList) {
          Object.entries(materialList).map((element) => {
            if (meatType == "Köfte") {
              materialList[element[0]] -= 1;
              if (element[0] === "Tavuk") {
                materialList[element[0]]++;
              }
            } else {
              if (element[0] === "Köfte") {
                materialList[element[0]]++;
              }
              materialList[element[0]] -= 1;
            }
          });
          await wait(2000,"Hamburger hazırlandı..");
        };

async function preparing(materialList) {
  await wait(2000, materialList);
  await wait(2000,`İçecek hazırlanıyor`);
  await wait(2000,`Patates kızartılıyor`);
  await wait(4000,`İçecek hazır`);
  await wait(7000,`Patates kızartıldı`);

  await wait(8000,"Soslar Ve Ürünler Servis Tepsisine Konuldu")
  await wait(9000,"Müşteriye Servis Edildi")
}