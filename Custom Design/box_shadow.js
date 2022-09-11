<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View
                         style={{
                              shadowColor: 'purple',
                              height: 150,
                              width: '90%',
                              backgroundColor: 'white',
                              alignItems: 'center',
                              justifyContent: 'center',
                              //android specific
                              elevation: 10,
                              margin:20,
                              //ios specific
                              shadowOffset: { width: 1, height: 1 },
                              shadowRadius: 3,
                              shadowOpacity: 0.5,
                         }}>
             <Text style={{ color: 'rgba(128,0,128,0.5)'}}>
                   Welcome to React Native
            </Text>
       </View>
</View>
