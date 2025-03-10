// Copyright 2020-present 650 Industries. All rights reserved.
package versioned.host.exp.exponent.modules.universal

import android.content.Context
import javax.inject.Inject
import host.exp.exponent.ExpoUpdatesAppLoader
import expo.modules.updates.UpdatesConfiguration
import expo.modules.updates.UpdatesInterface
import expo.modules.updates.UpdatesService
import expo.modules.updates.db.DatabaseHolder
import expo.modules.updates.selectionpolicy.SelectionPolicy
import expo.modules.updates.loader.FileDownloader
import expo.modules.updates.db.entity.UpdateEntity
import expo.modules.updates.db.entity.AssetEntity
import expo.modules.updates.launcher.Launcher.LauncherCallback
import host.exp.exponent.kernel.KernelProvider
import host.exp.exponent.di.NativeModuleDepsProvider
import host.exp.exponent.kernel.KernelConstants
import java.io.File

class UpdatesBinding(context: Context, experienceProperties: Map<String, Any?>) :
  UpdatesService(context), UpdatesInterface {

  @Inject
  lateinit var databaseHolderInternal: DatabaseHolder

  private var manifestUrl: String?
  private var appLoader: ExpoUpdatesAppLoader?

  override fun getExportedInterfaces(): List<Class<*>> {
    return listOf(UpdatesInterface::class.java as Class<*>)
  }

  override fun getConfiguration(): UpdatesConfiguration {
    return appLoader!!.updatesConfiguration
  }

  override fun getSelectionPolicy(): SelectionPolicy {
    return appLoader!!.selectionPolicy
  }

  override fun getDirectory(): File {
    return appLoader!!.updatesDirectory
  }

  override fun getFileDownloader(): FileDownloader {
    return appLoader!!.fileDownloader
  }

  override fun getDatabaseHolder(): DatabaseHolder {
    return databaseHolderInternal
  }

  override fun isEmergencyLaunch(): Boolean {
    return appLoader!!.isEmergencyLaunch
  }

  override fun isUsingEmbeddedAssets(): Boolean {
    return false
  }

  override fun canRelaunch(): Boolean {
    return true
  }

  override fun getLaunchedUpdate(): UpdateEntity? {
    return appLoader!!.launcher.launchedUpdate
  }

  override fun getLocalAssetFiles(): Map<AssetEntity, String>? {
    return appLoader!!.launcher.localAssetFiles
  }

  override fun relaunchReactApplication(callback: LauncherCallback) {
    KernelProvider.instance.reloadVisibleExperience(manifestUrl!!, true)
    callback.onSuccess()
  }

  override fun resetSelectionPolicy() {
    // no-op in managed
  }

  companion object {
    private val TAG = UpdatesBinding::class.java.simpleName
  }

  init {
    NativeModuleDepsProvider.instance.inject(UpdatesBinding::class.java, this)
    manifestUrl = experienceProperties[KernelConstants.MANIFEST_URL_KEY] as String?
    appLoader = KernelProvider.instance.getAppLoaderForManifestUrl(manifestUrl)
  }
}
